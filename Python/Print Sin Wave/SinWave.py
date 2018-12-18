import math
import time
iteration= int(input("Enter The Number of iteration you Want: "));

def sinWave(angle):
    return math.sin(angle);

x=0;
while( x< (iteration * 2 * math.pi)):
    curve= sinWave(x);
    bar= int(10*curve);
    print((10+bar)*'*');
    x=x+.5;
    time.sleep(0.05);
