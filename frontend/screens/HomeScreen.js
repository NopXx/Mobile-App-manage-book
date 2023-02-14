import React, { useEffect, useState } from "react";

import BookList from "../components/BookList";
import Layout from "../components/Layout";

const HomeScreen = () => {


  return (
    <Layout>
      <BookList />
    </Layout>
  );
};
 
export default HomeScreen;
