# Trick or Tracker

## Team Members: ##
- Larkin Ingram
- Johnny Kreitzman
- William Lukas
- Steve McMillen

## Description:  ##
Trick or tracker is a web app that allows you to submit what kind of candy you plan on giving out this Halloween, giving participants an easy way to plan which houses they want to stop by, and allowing candy givers to scope out the competition.


## Sketch of design ##

### Home Page ###
![Image description](/Sketches/Site1.jpg)




## API's to be used ##
- IP Data API - Takes user IP address and returns latitude/longitude.
- Google Geolocation - Takes latitude/longitude and returns information about nearby neighborhoods.
- MapBox API - Renders a map on the webpage based on the neighborhood name returned by Geolocation API.



## Rough breakdown of the tasks ##
- Take in user input.
- Depending on input:


    ### I am trick or treating. ###
- determines user location based on IP address
- displays neighborhood map
- displays list of candy being given out in that neighborhood


![Image description](/Sketches/site3.jpg)

     

### I am giving out candy. ###
     
     
- displays neighborhood map
- displays an input box where user can enter the candy they will be giving out on Halloween.
- renders user input to page


![Image description](/Sketches/Site2.jpg)


### The user can then view the candy tht will be given out in their neighborhood, and can plan their trick or treat routes accordingly.
