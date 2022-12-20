"use client";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { fetchGameDetails } from "../../api/fetchGameDetails";
type PageProps = {
  params: {
    gameId: number;
  };
};

const page = (props: PageProps) => {
  const { data } = useQuery(
    [props.params.gameId],
    () => fetchGameDetails(props.params.gameId),
    { staleTime: Infinity }
  );

  return (
    <div>
      <pre>{JSON.stringify(data, null, 4)}</pre>
    </div>
  );
};

export default page;
