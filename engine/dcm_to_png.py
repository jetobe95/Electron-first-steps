
import os
import sys
import numpy as np
import png
import pydicom


"""Convert a DICOM file into a PNG file"""
try:
    destination = sys.argv[1]      # './data/fixed.png'
    dicom_file_path = sys.argv[2]
    # print(destination, dicom_file_path)
    
    ds = pydicom.dcmread(dicom_file_path)
    shape = ds.pixel_array.shape
    # Convert to float to avoid overflow or underflow losses.
    image_2d = ds.pixel_array.astype(float)
    # Rescaling grey scale between 0-255
    image_2d_scaled = (np.maximum(image_2d, 0) / image_2d.max()) * 255.0
    # Convert to uint
    image_2d_scaled = np.uint8(image_2d_scaled)
    # Writing the PNG file
    # Write the PNG file
    with open(destination, 'wb') as png_file:
        w = png.Writer(shape[1], shape[0], greyscale=True)
        w.write(png_file, image_2d_scaled)
except:
    pass