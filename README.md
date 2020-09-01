### `Send Tags Takehome - Deadline/Due: Friday, 9.4.20 5:00 PT` 

At Noterouter, we use attributed such as tags, organization, or names that are assigned to our clients' recipients in order determine who we want to send messages to. For this takehome, we created a rudimentary sending system for you to finish and implement.

This React App is partially implemented with the following inputs defined:

> Send Type - String "type" that tells us if we should be sending based on the user's organization, first/last name, or tag attributes

> Send To - String "tags" separated by commas that will tell us who we want to send to

> AND/OR? - The conditional clause that tells us which qualifier to use (e.g. send to everyone with "tagA" AND "tagB" or send to people with "tagA" OR "tagB")

Your task is to complete the application where given an API endpoint (from sheetsdb https://sheetdb.io/, check out the documentation), an output of "Sent to" is determined.

For example,

The api might return the following:

[
    {"id":"1337","firstName":"Peter","lastName":"Parker","organizationId":"Avengers, Inc.","tags":"nerdy, strong, hero, funny"},
    {"id":"2123","firstName":"John","lastName":"Doe","organizationId":"Mystery Company","tags":"smart, tall, handsome"},
    {"id":"3312","firstName":"Chadwick","lastName":"Boseman","organizationId":"Hollywood SAG","tags":"king, hero, actor"},
    {"id":"5408","firstName":"Jonathon","lastName":"Gough","organizationId":"NoteRouter","tags":"tall, smart, funny"},
    {"id":"3882","firstName":"Ryan","lastName":"Gosling","organizationId":"Hollywood SAG","tags":"actor, handsome, tall"}
]

...and the application might have a user input like the following:


> Send Type - “Tags”

> Send To - "hero", "funny"

> AND/OR? - OR

Then the Output would be: 
> `"Sent to: Peter Parker, Chadwick Boseman, Jonathon Gough"`

...or a user input like this:
> Send Type - “Organization”

> Send To - "Hollywood SAG"

> AND/OR? - AND

Then the Output would be: 
> `"Sent to: Chadwick Boseman, Ryan Gosling"`


HERE IS THE LINK FOR THE API WHERE YOU WILL BE GETTING DATA FROM: https://sheetdb.io/api/v1/aka2sv6jd00dh -- please don't spam with requests.

Assumptions you can make:
- Inputs to the forms will be text, meaning we won't be inputting them as quoted strings (tagA vs. "tagA")
- The API Data WILL change for our evaluations but the schema will not
- You may need external npm libraries for things such as parsing or API calls so feel free to introduce them but make sure you add them to your dependencies so we can `npm install`


See below for a screenshot of what the output should look like:
![Example](/images/example.png)


This assessment must be submitted by this Friday, September 4th at 5:00 PT. You should not spend more than 2-4 hours on this assessment. We care much more about the quality of what you're able to get done, and the methodology you followed to do it - rather than how much you get done. With this time constraint in mind, what else besides the bare minimum can you get in before the buzzer?
Bonus Points:
- Making it fault tolerant (what happens when we put in unexpected inputs?)
- Are you good at design? Show off here!
- If you add tests, what framework will you use to write them and how easy are they to follow?
- Will you restructure the code and fix bugs that may be in there?
- We left some things intentionally vague to see how you deal with unclear requirements. At NoteRouter, you'll frequently have to call your own shots. :)

### `Submission`
To submit, please fork the project and create a PR for us to review no later than Friday, August 4th at 5:00 PT. We will be pulling these down and running/testing them  locally on our machines.

### `npm install && npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.
