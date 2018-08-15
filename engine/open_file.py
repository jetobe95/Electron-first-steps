import sys
import os
import tkinter as tk
from tkinter.filedialog import askopenfilename

"""Open a file"""
try:
    root = tk.Tk()
    root.withdraw()
    path = askopenfilename(initialdir=".",
                           filetypes=(
                                ("Dicom (*.DCM)", "*.dcm"),
                                ("JPEG (*.JPG)", "*.jpg*"),
                                ("PNG (*.PNG)", "*.png*")
                            ),
                           title="Choose an image"
                           )
except():
    pass