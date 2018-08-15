from __future__ import print_function
from functools import reduce

import SimpleITK as sitk
from PIL import Image
import sys
import os


pixelType = sitk.sitkFloat32

fixed_file = '../images/fixed_input.png'
moving_file = '../images/moving_input.png'

fixed = sitk.ReadImage(fixed_file, sitk.sitkFloat32)

moving = sitk.ReadImage(moving_file, sitk.sitkFloat32)

R = sitk.ImageRegistrationMethod()

R.SetMetricAsCorrelation()

R.SetOptimizerAsRegularStepGradientDescent(learningRate=2.0,
                                           minStep=1e-4,
                                           numberOfIterations=500,
                                           gradientMagnitudeTolerance=1e-8)
R.SetOptimizerScalesFromIndexShift()

tx = sitk.CenteredTransformInitializer(fixed, moving, sitk.Similarity2DTransform())
R.SetInitialTransform(tx)

R.SetInterpolator(sitk.sitkLinear)

outTx = R.Execute(fixed, moving)

if not "SITK_NOSHOW" in os.environ:

    resampler = sitk.ResampleImageFilter()
    resampler.SetReferenceImage(fixed)
    resampler.SetInterpolator(sitk.sitkLinear)
    resampler.SetDefaultPixelValue(1)
    resampler.SetTransform(outTx)

    out = resampler.Execute(moving)

    simg1 = sitk.Cast(sitk.RescaleIntensity(fixed), sitk.sitkUInt8)
    simg2 = sitk.Cast(sitk.RescaleIntensity(out), sitk.sitkUInt8)
    cimg = sitk.Compose(simg1, simg2, simg1//2.+simg2//2.)

    nda = sitk.GetArrayViewFromImage(cimg)
    my_pil = Image.fromarray(nda)
