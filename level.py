import datetime
import os
import shutil
import time
import glob
import sys
import zipfile
import smtplib
import string
import datetime, glob, shutil
from datetime import timedelta
import copernicus_marine_client as copernicus_marine_client
from datetime import date
from datetime import datetime
##################
# LEVEL FORECAST #
##################
# 1) download netcdf file from cmems
# start datetime
today = datetime.utcnow()
azi = today.strftime("%d_%m_%Y_%H_%M")
d1 = today.strftime("%Y-%m-%d 00:00:00")
# end_datetime
over2days = (today + timedelta(days=2)).strftime("%Y-%m-%d 21:00:00")
d2= over2days

copernicus_marine_client.subset(
 dataset_id="cmems_mod_blk_phy-ssh_anfc_2.5km_PT1H-m",
 variables=['zos'],
 minimum_longitude=28.5,
 maximum_longitude=32.5,
 minimum_latitude=42.5,
 maximum_latitude=46,
 minimum_depth=2.501,
 maximum_depth=266.0668,
 start_datetime=d1,
 end_datetime=d2,
 output_filename= azi + ".nc",
 output_directory=r"out_dir/NC/",
 username='',
 password='',
 force_download=True
 )

time.sleep(10)

os.chdir("C:\\motu-client-python\\out_dir\\NC")
for file in glob.glob("*.nc"):
    file_name = "C:\\motu-client-python\\out_dir\\NC\\"+file
file_stats = os.stat(file_name)
size_mb = file_stats.st_size / (1024 * 1024)

if size_mb > 4:
    #  move  .nc files  from /NC to C:\\OpenGrADS\\Contents\\Resources\\SampleDatasets

    # folders must exist
    dir_src = "C:\\motu-client-python\\out_dir\\NC\\"
    dir_dst = "C:\\OpenGrADS\\Contents\\Resources\\SampleDatasets\\"
    for file in os.listdir(dir_src):
        #print file # testing
        src_file = os.path.join(dir_src, file)
        dst_file = os.path.join(dir_dst, file)
        shutil.move(src_file, dst_file)



    time.sleep(10)
    # create an array with files name
    filesNC = []
    for filename in glob.glob('C:\\OpenGrADS\\Contents\\Resources\\SampleDatasets\\*.nc'):
       
            filesNC.append(filename)

    time.sleep(10)
    # rewrite the GrADS script nivel.gs: replace the file name
    def replace_line(file_name, line_num, text):
            lines = open(file_name, 'r').readlines()
            lines[line_num] = text
            out = open(file_name, 'w')
            out.writelines(lines)
            out.close()

    if filesNC:
            replace_line('C:\\OpenGrADS\\Contents\\Resources\\Scripts\\nivel.gs', 6,  "'sdfopen " + filesNC[0][-19:] + "'" + "\n")

    time.sleep(10)
    # 2) run GrADS; output = PNG files
    os.chdir("C:\\OpenGrADS\\Contents\\Resources\\SampleDatasets")         
    os.system("C:\\OpenGrADS\\Contents\\Cygwin\\Versions\\2.2.1.oga.1\\i686\\opengrads.exe -lc 'run nivel.gs'")



    time.sleep(10)
    # 3) create an animation(GIF) from PNGs with ImageMagick
    os.chdir("C:\\OpenGrADS\\Contents\\Resources\\SampleDatasets\\")
    os.system('"C:\\ImageMagick-7.1.0-Q16-HDRI\\convert.exe" -delay 75 -loop 0 *.png Level_0m.gif')

    time.sleep(10)
    # move .NC to D:\FORECAST_OLD_NC
    os.chdir("C:\\OpenGrADS\\Contents\\Resources\\SampleDatasets\\")
    for files in glob.glob("*.nc"):
            shutil.move(files,"D:\\FORECAST_OLD_NC\\")

    time.sleep(10)
    # move GIF to ANIM_AZI
    shutil.move("C:\\OpenGrADS\\Contents\\Resources\\SampleDatasets\\Level_0m.gif","C:\\motu-client-python\\out_dir\\ANIM_AZI\\")

    time.sleep(10)
    # delete png
    for files in glob.glob("C:\\OpenGrADS\\Contents\\Resources\\SampleDatasets\\*.png"):
            os.remove(files)
    time.sleep(10)
    os.chdir("C:\\motu-client-python\\")

elif size_mb < 4:
	print("ERROR AT DOWNLOAD. STOP ! WE CONTINUE WITH ANOTHER PARAMETER")
