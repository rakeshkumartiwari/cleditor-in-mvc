# script.app.jobseeker

1.store.js :-
Whenever I want to update the store I will publish the events and the eventHandler will update the store.
*By no other means update the store.
Whenever store change it's state it will publish the event.

2.selector.js :-
Whenever I want to get the value from the store I will use the selector.
For example all controllers will get the state data from selector.

3.Whenever I want to make a api call I will use a handler.

4.effects (It can be folder in between handler folder.) :-
It carries handlers who perform asynchronous task.
for example api calls, so it has a effects like success and fail.

5.reducer (It can be folder in between handler folder.) :-
It carries handlers who perform synchronous task.
It is always synchronous and side effect free.
For example handler who just update the store.js
