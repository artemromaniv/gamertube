"use client";
import { useQuery } from "@tanstack/react-query";
import { GameProps } from "../../types/GameDetails";
import {useEffect} from "react";
import { fetchGameDetails } from "../../api/fetchGameDetails";
import Loader from "../../components/Loader";
type PageProps = {
  params: {
    gameId: number;
  };
};

const page = (props: PageProps) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const { data, isLoading } = useQuery<GameProps>(
    [props.params.gameId],
    () => fetchGameDetails(props.params.gameId),
    { staleTime: Infinity }
  );

  if (isLoading) {
    return <Loader />;
  }
  return (
    <div>
      <pre>{JSON.stringify(data, null, 4)}</pre>
    </div>
  );
};

export default page;
