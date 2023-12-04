lev.1=2.5 

levs.1="0000" 

cint.1=0.5 

'sdfopen 16_11_2023_16_20.nc'
tn=1 
while (tn <=72) 
ln=1 
 



'set lon 28.500  32.400' 
'set lat 42.800  45.800' 
 
'set mpdraw on' 
'set mpdset hires' 
'set poli on' 
'set map 1 1 20' 
'set grads off' 
 
'set rgb 16 0 0 131' 
'set rgb 17 0 0 143' 
'set rgb 18 0 0 155' 
'set rgb 19 0 0 171' 
'set rgb 20 0 0 183' 
'set rgb 21 0 0 195' 
'set rgb 22 0 0 207' 
'set rgb 23 0 0 219' 
'set rgb 24 0 0 235' 
'set rgb 25 0 0 247' 
'set rgb 26 0 4 255' 
'set rgb 27 0 16 255' 
'set rgb 28 0 28 255' 
'set rgb 29 0 44 255' 
'set rgb 30 0 56 255' 
'set rgb 31 0 68 255' 
'set rgb 32 0 80 255' 
'set rgb 33 0 92 255' 
'set rgb 34 0 108 255' 
'set rgb 35 0 120 255' 
'set rgb 36 0 131 255' 
'set rgb 37 0 143 255' 
'set rgb 38 0 155 255' 
'set rgb 39 0 171 255' 
'set rgb 40 0 183 255' 
'set rgb 41 0 195 255' 
'set rgb 42 0 207 255' 
'set rgb 43 0 219 255' 
'set rgb 44 0 235 255' 
'set rgb 45 0 247 255' 
'set rgb 46 4 255 251' 
'set rgb 47 16 255 239' 
'set rgb 48 28 255 227' 
'set rgb 49 44 255 211' 
'set rgb 50 56 255 199' 
'set rgb 51 68 255 187' 
'set rgb 52 80 255 175' 
'set rgb 53 92 255 163' 
'set rgb 54 108 255 147' 
'set rgb 55 120 255 135' 
'set rgb 56 131 255 124' 
'set rgb 57 143 255 112' 
'set rgb 58 155 255 100' 
'set rgb 59 171 255 84' 
'set rgb 60 183 255 72' 
'set rgb 61 195 255 60' 
'set rgb 62 207 255 48' 
'set rgb 63 219 255 36' 
'set rgb 64 235 255 20' 
'set rgb 65 247 255 8' 
'set rgb 66 255 251 0' 
'set rgb 67 255 239 0' 
'set rgb 68 255 227 0' 
'set rgb 69 255 211 0' 
'set rgb 70 255 199 0' 
'set rgb 71 255 187 0' 
'set rgb 72 255 175 0' 
'set rgb 73 255 163 0' 
'set rgb 74 255 147 0' 
'set rgb 75 255 135 0' 
'set rgb 76 255 124 0' 
'set rgb 77 255 112 0' 
'set rgb 78 255 100 0' 
'set rgb 79 255 84 0' 
'set rgb 80 255 72 0' 
'set rgb 81 255 60 0' 
'set rgb 82 255 48 0' 
'set rgb 83 255 36 0' 
'set rgb 84 255 20 0' 
'set rgb 85 255 8 0' 
'set rgb 86 251 0 0' 
'set rgb 87 239 0 0' 
'set rgb 88 227 0 0' 
'set rgb 89 211 0 0' 
'set rgb 90 199 0 0' 
'set rgb 91 187 0 0' 
'set rgb 92 175 0 0' 
'set rgb 93 163 0 0' 
'set rgb 94 147 0 0' 
'set rgb 95 135 0 0'  
'set rgb 96 127 0 0'  
 
 
 
'set t 'tn 
'q time' 
hour=substr(result,8,2)   
day=substr(result,11,2)  
month=substr(result,13,3)  
year=substr(result,16,4)  
months=""  
 
 
if (month="JAN")  
months="01";  
endif 
if (month="FEB")  
months="02";  
endif 
if (month="MAR")  
months="03";  
endif 
if (month="APR")  
months="04";  
endif 
if (month="MAY")  
months="05";  
endif 
if (month="JUN")  
months="06";  
endif 
if (month="JUL")  
months="07";  
endif 
if (month="AUG")  
months="08";  
endif 
if (month="SEP")  
months="09";  
endif 
if (month="OCT")  
months="10";  
endif 
if (month="NOV")  
months="11";  
endif 
if (month="DEC")  
months="12";  
endif 
 
 
 

  
 
'define max=max(max(zos,X=1,X=324),Y=1,Y=289)' 
'define min=min(min(zos,X=1,X=324),Y=1,Y=289)' 
'define dd=max-min' 
'define dt=dd/80' 
 
'd min' 
rec = sublin(result,1) 
min = subwrd(rec,4)  
if ((min<0.01)&(min>-0.01))  
min=0.0001;  
endif 
 
'd max' 
rec = sublin(result,1) 
max = subwrd(rec,4)  
 
'd dd' 
rec = sublin(result,1) 
dd = subwrd(rec,4)  
 
'd dt' 
rec = sublin(result,1) 
dt = subwrd(rec,4)  
 
'clear' 
 
g="" 
i=1 
cc=min 
while (i<=80) 
g=g%" "%cc 
cc=cc+dt 
i=i+1 
endwhile 
 
'set clevs ' g

 
'set ccols  16.00 17.00 18.00 19.00 20.00 21.00 22.00 23.00 24.00 25.00 26.00 27.00 28.00 29.00 30.00 31.00 32.00 33.00 34.00 35.00 36.00 37.00 38.00 39.00 40.00 41.00 42.00 43.00 44.00 45.00 46.00 47.00 48.00 49.00 50.00 51.00 52.00 53.00 54.00 55.00 56.00 57.00 58.00 59.00 60.00 61.00 62.00 63.00 64.00 65.00 66.00 67.00 68.00 69.00 70.00 71.00 72.00 73.00 74.00 75.00 76.00 77.00 78.00 79.00 80.00 81.00 82.00 83.00 84.00 85.00 86.00 87.00 88.00 89.00 90.00 91.00 92.00 93.00 94.00 95.00 96'  
 
'set xaxis 28.500  32.400 0.5' 
'set yaxis 42.800  45.800 0.5' 
'set xlopts 1 4 0.12' 
'set ylopts 1 4 0.12' 
'set gxout shaded' 

 
'd zos' 
'set cint ' cint.ln 
'set clab auto' 
'set gxout contour' 
'd zos' 
'draw title Sea Level (cm). Date 'year'.'%months%'.'day'. Time 'hour'(h):00(m) GMT' 
'draw xlab Longitude (East)' 
'draw ylab Latitude (North)' 
'set strsiz 0.2' 
'draw string 2.0 7.0 Z = 'lev.ln' m' 
 
 

 
'run cbar1' 
'set line 0 1 1' 
'draw recf 7 0 10 0.4' 
'draw recf 0 0 2 0.4'  
'gxprint LEV'year%months%day%hour%00'.png png white' 
'clear' 
 
 


 
tn=tn+3 
endwhile 
'quit' 
















































































































































































































































































































































































































