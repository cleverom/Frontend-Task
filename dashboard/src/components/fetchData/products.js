// import React from 'react';

// export default class FetchRandomUser extends React.Component {
//   state = {
//     loading: true,
//     person: null
//   };

//   async componentDidMount() {
//     const url = "https://api.randomuser.me/";
//     const response = await fetch(url);
//     const data = await response.json();
//       this.setState({ person: data.results[0], loading: false });
//       console.log(data.results[0])
//   }