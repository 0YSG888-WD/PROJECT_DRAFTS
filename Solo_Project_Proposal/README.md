# **"SUGAR"**

https://github.com/0YSG888-WD/sugar

>A web application to give aid to those in need. Neighbors (users) are able to create requests based on database listings for essential items. Especially in this crisis, things such as toilet paper, coffee, paper towels, soap, hand sanitizer, or textiles such as towels become are rarity. 

>This application allows people with a surplus to be able to give to those in need. 

Hello, and thank you, Neighbor. 



**def index():**
* 'SUGAR'
* login / registration
* 'new to Sugar?'
* allows registered users to login, and welcomes new neighbors into the neighborhood

**def homepage():**
* user homepage displays new requests ordered by created_at DESC
* each request is individual, and based on the essential item needed
* each request div has a 'message' button
* message buttons allow contact between 'neighbors'
	* messages allow neighbors to accept donations, and confirm fulfilled requests

**def search():**
* search page
* allows neighbors to search for listings based on item
* and in the future based on area 
* each item listed is exactly like above
	* messages allow neighbors to accept donations, and confirm fulfilled requests

**def requests():**
* a page for user requests
* displays a current list of requests made by the user
* as well as a 'make request' div where the user can also put a request into the database 

**def neighbor():**
* views user stats
* reviews left by other neighbors
* total requests fulfilled
* total requests made
* star rating

**def messages():**
* a list of open and closed message requests
* each message listing can expand or contract when clicked
* maybe in the future allow the option to load messages in new window

**def quotes():**
* Dr. Jonas Salk, in
	- Edward R. Murrow: Who owns the patent on this vaccine?
	- "Well, the people, I would say. There is no patent. Could you patent the sun?"
* Bil Gates
	- "I've been very lucky, and therefore I owe it to try and reduce the inequity in the world. And that's kind of a religious belief. I mean, it's at least a moral belief."
	- "The most amazing philanthropists are people who are actually making a significant sacrifice."
	- "Investing for the poor requires participation from the entire community."
* Oprah Winfrey 
	- "-and you get a car! And you get a car!"
* Mantra 
	- "The gift of giving back. Hello, neighbor."

![wireframe1](images/1.png)
![wireframe1](images/2.png)
![wireframe1](images/3.png)

## THE LEAN STARTUP
- identify core set of MVP features 
- core tehssi for testing
	- posting and fulfilling requests 
	- searching, messaging, rating, revewing,
		- tangential features to core app
- importance of front end verses backend 
- double down on frontend 
- how messages work
	- purposes of messages
	- steps between fulfilling requests
	- confirming request / fulfilling requests