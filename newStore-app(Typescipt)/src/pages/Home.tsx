import { gql, useMutation, useQuery } from "@apollo/client";
import React, { useEffect } from "react";
import { AUTHOR, PUBLISH_UPDATE_AUTHOR } from "../apollo/requests";

const Home = () => {
  // const SENDJSON = gql`
  //   mutation ($email: String!, $items: Json!) {
  //     updateAuthor(where: { email: $email }, data: { itemInfo: $items }) {
  //       itemInfo
  //     }
  //   }
  // `;

  // const [sendJson, { error, data: sendData }] = useMutation(SENDJSON);
  // const [publish, {data: pubData}] = useMutation(PUBLISH_UPDATE_AUTHOR)
  // const {
  //   error: authorError,
  //   loading: authorLoading,
  //   data
  // } = useQuery(AUTHOR,{variables: {
  //   email: localStorage.getItem('user')
  // }});

  // const mult = [
  //   {
  //     name: "moso",
  //     age: 19
  //   },
  //   {
  //     name: "ando",
  //     age: 18
  //   }
  // ]

  // const handleClick = () => {
  //     sendJson({
  //       variables: {
  //         email: "fiufu@efe.ef",
  //         items: mult
  //       },
  //     });
      
  //     console.log(data);
  //   }
   

  // useEffect(() => {
  //   if(sendData) {
  //     publish({
  //       variables: {
  //         email: localStorage.getItem('user')
  //       }
  //     })
  //   }
    
  // }, [sendData])
  return <button>Send json</button>;
};

export default Home;
