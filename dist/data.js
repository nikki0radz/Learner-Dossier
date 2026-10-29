const NAMES=['Sophie Bennett','Daniel Clarke','Amelia Foster','Ethan Brooks','Chloe Mitchell','Oliver Hayes','Grace Turner','Liam Parker','Freya Collins','Noah Edwards','Ruby Morgan','Adam Wilson'];
const RAW={
E1:`E1.1.1|Read numbers up to 20
E1.1.2|Order numbers up to 20
E1.1.2|Compare numbers up to 20
E1.2.1|Count numbers up to 20
E1.3.1|Add numbers up to 20
E.3.2.1|Subtract numbers up to 20
E1.4.1|Interpret symbols: +, -, =
E1.5.1|Recognise notes and coins
E1.6.1|Read 12-hour clocks
E1.7.1|Know number of days in a week, months and seasons in a year
E1.8.1|Compare size
E1.8.2|Compare length
E1.8.3|Compare width
E1.8.4|Compare height
E1.8.5|Compare weight
E1.8.6|Compare capacity
E1.9.1|Recognise 2D and 3D shapes
E1.10.1|Describe position
E1.11.1|Read information from lists
E1.12.1|Sort objects
E1.13.1|Read and draw a tally chart
E1.13.2|Read and draw a block graph`,
E3:`E3.1.1/2/3/4|Count numbers up to 1000
E3.1.5|Read and write numbers up to 1000
E3.1.6|Order and compare numbers up to 1000
E3.2.1|Add 3-digit numbers
E3.2.2|Subtract 3-digit numbers
E3.3.1|Divide 3-digit by 1-digit numbers
E3.3.1|Divide 3-digit by 2-digit numbers
E3.4.1|Multiply 2-digit by 1-digit numbers
E3.4.2|Multiply 2-digit by 2-digit numbers
E3.5.1|Round to the nearest 10
E3.5.2|Round to the nearest 100
E3.6|Recognise and continue sequences of numbers (to 100)
E3.7.1|Read, write and understand thirds, quarters, fifths and tenths
E3.7.2|Read, write and understand equivalent fractions
E3.8|Read, write and use decimals (up to 2 decimal places)
E3.9|Recognise and continue decimal sequences
E3.10|Calculate with money
E3.11|Round money to the nearest £1 or 10p
E3.12|Read, measure and record time (AM and PM)
E3.13|Read time from analogue and digital clocks (24 hr)
E3.14|Use and compare measures of length, weight, capacity and temperature
E3.15|Length: compare m, cm and mm
E3.16|Weight: compare kg and g
E3.17|Capacity: compare ml and l
E3.18|Use a suitable instrument to measure mass and length
E3.19|Sort 2D and 3D shapes
E3.20|Describe position and direction
E3.21|Extract information from lists
E3.21|Extract information from tables
E3.21|Extract information from diagrams
E3.21|Extract information from charts
E3.21|Create frequency tables
E3.22|Compare information presented in different formats
E3.23|Represent information in tables
E3.23|Represent information in diagrams
E3.23|Represent information in line graphs
E3.23|Represent information in bar charts`,
L1:`L1.1|Read, write, order and compare numbers up to 1m
L1.2|Use positive and negative numbers
L1.3|Multiply and divide by 10, 100, 1000
L1.4|Use multiplication facts and make connections with division facts
L1.5|Use 1-step and 2-step formulae given in words
L1.6|Calculate the squares of numbers up to 100
L1.7|Follow the order of operations
L1.8|Read, write, order and compare fractions and mixed numbers
L1.9|Work out fractions of amounts
L1.10|Read, write, order and compare decimals (up to 3 d.p.)
L1.11|Add, subtract, multiply and divide decimals (up to 2 d.p.)
L1.12|Round to a whole number, 1 d.p. and 2 d.p.
L1.13|Read, write, order and compare percentages
L1.14|Work out percentages of amounts
L1.14|Work out percentage increase and decrease (in multiples of 5%)
L1.15|Estimate answers to calculations using fractions and decimals
L1.16|Convert between common decimals, fractions and percentages
L1.17|Work with simple ratio and proportion
L1.18|Calculate simple interest in multiples of 5%
L1.19|Calculate discounts in multiples of 5%
L1.20|Convert between measurement units of the same system
L1.21|Use scales on maps and drawings
L1.22|Calculate the area and perimeter of simple and compound rectangles
L1.23|Calculate the volume of cubes and cuboids
L1.24|Draw 2D shapes
L1.24|Understand line symmetry
L1.24|Understand relative size of angles
L1.25.2|Interpret plans and elevations of 3D shapes
L1.25.1|Interpret nets of 3D shapes
L1.26|Describe position and direction using angles
L1.26|Measure angles in degrees
L1.27.1|Represent data in tables
L1.27.2|Represent data in bar charts
L1.27.3|Represent data in line graphs
L1.27.4|Represent data in pie charts
L1.28|Group and represent data graphically
L1.29|Find the mean of a data set
L1.29|Find the range of a data set
L1.30|Use probability to compare the likelihood of events
L1.31|Express the probabilities of simple events as fractions`,
L2:`L2.1|Read, write, order and compare positive and negative numbers of any size
L2.2|Calculate with numbers up to 1 million
L2.2|Use estimation to check calculations with numbers
L2.3.1|Evaluate expressions given in words and symbols
L2.3.2|Make substitutions in given formulae in words and symbols
L2.4|Convert between fractions, decimals and percentages
L2.5|Work out percentages of amounts
L2.5|Express one amount as a percentage of another
L2.6|Calculate percentage change
L2.6|Find the original value after percentage change
L2.7|Order, add, subtract and compare fractions of amounts (+ mixed numbers)
L2.8|Express one number as a fraction of another
L2.9|Order, approximate and compare decimals
L2.10|Add, subtract, multiply and divide decimals (up to 3 d.p.)
L2.11|Calculate using ratio
L2.11|Calculate using direct proportion
L2.11|Calculate using inverse proportion
L2.12|Follow the order of operations (BIDMAS)
L2.13.1|Calculate amounts of money
L2.13.2|Calculate compound interest
L2.13.3|Calculate percentage increase/decrease
L2.14|Convert between metric and imperial units of measurement
L2.15|Calculate using compound measures (speed, density, rates of pay)
L2.16.1|Calculate perimeters and areas of triangles
L2.16.2|Calculate perimeters and areas of circles
L2.16.3|Calculate perimeters and areas of compound shapes
L2.17.1|Use formulae to find volumes of 3D shapes
L2.17.2|Use formulae to find volume of a sphere
L2.17.3|Use formulae to find the surface area of 3D shapes
L2.17.4|Use formula to find the surface area of a sphere
L2.18|Calculate actual dimensions from scale drawings
L2.18|Create a scale diagram given actual measurements
L2.19|Use 2D positive and negative coordinates to specify the position of points
L2.20|Use common 2D representations of 3D objects
L2.21|Draw 3D shapes to include plans and elevations
L2.22|Calculate values of angles and/or coordinates with 2D and 3D shapes
L2.23|Calculate the median of a data set
L2.23|Calculate the mode of a data set
L2.24|Estimate the mean of grouped data
L2.25|Compare two sets of data using the mean, median, mode and range
L2.26|Work out probability of combined events
L2.27|Express probabilities as fractions, decimals and percentages
L2.28|Draw scatter diagrams
L2.28|Interpret scatter diagrams
L2.28|Recognise positive and negative correlation`};
const LEVELS=Object.fromEntries(Object.entries(RAW).map(([k,v])=>[k,{title:({E1:'ENTRY 1',E3:'ENTRY 3',L1:'Level 1',L2:'Level 2'})[k]+' SELF-ASSESSMENT GRID',topics:v.split('\n').map(x=>x.split('|'))}]));
if(typeof module!=='undefined')module.exports={LEVELS,NAMES};
