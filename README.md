# EducationExpress
Az Great Code Challenge website can be found here:
[a link](thepanopticdiorama.com/EducationExpress\home.html)

The hackathon this year required some sort of tech solution that would enable pre-K kids to be more prepared for kindergarten. We made a website that allowed kids to log on, take pre-scribed tests according to their recorded weaknesses, as well as send parents data of their kids progress. All of our login/ user data and testing subjects were stored using an online database called firebase. We recognized that pre-k kids might not be incentived to take tests on their own, so we made a custom chat-bot that would talk to the student and provide game rewards when they submitted tests. The front-end of the chatbot was built on top of our website's html, and the back-end utilized an AI from an API. The API allowed us to set things like small-talk conversation as well how to react to the intent (Natural Language Processing json) of certain user inputs. Additionally, in order for the chatbot to grade the pre-K kids tests, we integrated an Optical Character Recognition API that took certain regions of an input image and spit out JSON data of their textual/numeric content. Once a child uploads a test to the chatbot, the chatbot grades it and updates the database. The chatbot is also paired with an SMS api which then sends the parents their most recent score. If the kid completes the test, he is rewarded with a game that he can choose to play or engage in small-talk with the chatbot for fun.

The proposed system won 2nd Place Overall in the competition

