# News App

A simple news app to search for a news or to check top news by country.

![](preview.gif)

## Important
This repo consists of two main branches:  
1. [main](https://github.com/sidmirza4/newsapp/tree/main)
2. [redux](https://github.com/sidmirza4/newsapp/tree/main)  
> In `redux` branch, Redux is used as a state management library.  

## Run the app locally

- Clone the app locally using `git clone https://github.com/sidmirza4/newsapp.git`.
- Install the required dependencies using `yarn install`.
- Create a new file `.env` in the root folder and add `VITE_NEWS_API_KEY=<API KEY HERE>`.
- To start the development server run `yarn dev`.

## Tech stack

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Chakra UI](https://chakra-ui.com/)
- [React Query](https://tanstack.com/query/v4/docs/overview)

## Thought process

- There were two main parts of the app: 1. Top news and 2. Search.
- I created tabs to show these two sections separately instead of stacking them, I could have shown the two on different pages but that would be an overkill for this simple project.
- The first tab is Top News, on page load top news are fetched based on the country the user is using the app from.
- To filter the top news by country a drop down is created on the right side of the heading.
- To sort the top news by date there is another dropdown, there was no support from the API to sort the top news by publish date, so I had to sort the top news on the client side.
- For state management I used `react-query` and `useState`.
- To hide the a news article I added an icon button on top-right corner of every news article. On click of that button the article is removed from the local state. For this project I have added `onClick` on every `NewsItem` but the ideal solution would be to add the `onClick` on the container and take advantage of "Event Bubbling".
