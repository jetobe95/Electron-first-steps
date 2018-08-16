
import SimpleITK as Sitk
from PIL import Image
import sys
import os


fixed_file = sys.argv[1]
moving_file = sys.argv[2]

fixed = Sitk.ReadImage(fixed_file, Sitk.sitkFloat32)

moving = Sitk.ReadImage(moving_file, Sitk.sitkFloat32)

R = Sitk.ImageRegistrationMethod()

R.SetMetricAsCorrelation()

R.SetOptimizerAsRegularStepGradientDescent(learningRate=4.0,
                                           minStep=1e-4,
                                           numberOfIterations=500,
                                           gradientMagnitudeTolerance=1e-8)
R.SetOptimizerScalesFromIndexShift()

tx = Sitk.CenteredTransformInitializer(fixed, moving, Sitk.Similarity2DTransform())
R.SetInitialTransform(tx)

R.SetInterpolator(Sitk.sitkLinear)

outTx = R.Execute(fixed, moving)

if not "SITK_NOSHOW" in os.environ:

    resampler = Sitk.ResampleImageFilter()
    resampler.SetReferenceImage(fixed)
    resampler.SetInterpolator(Sitk.sitkLinear)
    resampler.SetDefaultPixelValue(1)
    resampler.SetTransform(outTx)

    out = resampler.Execute(moving)

    simg1 = Sitk.Cast(Sitk.RescaleIntensity(fixed), Sitk.sitkUInt8)
    simg2 = Sitk.Cast(Sitk.RescaleIntensity(out), Sitk.sitkUInt8)
    cimg = Sitk.Compose(simg1, simg2, simg1 // 2. + simg2 // 2.)

    nda = Sitk.GetArrayViewFromImage(cimg)
    my_pil = Image.fromarray(nda)
    my_pil.save('./data/output.png')
    
    text_iteration = " Iteration: {0}".format(R.GetOptimizerIteration())
    text_metric = " Metric value: {0}".format(R.GetMetricValue())
    text_out = text_iteration + " _f_ " + text_metric
    print(text_out)
    
