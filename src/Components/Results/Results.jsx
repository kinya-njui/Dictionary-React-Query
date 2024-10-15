import React from "react";
import { useQuery } from "@tanstack/react-query";
import useNewWord from "../Store/newWord";

function Results() {
  const word = useNewWord((state) => state.word);

  const { data, isLoading, error, isError } = useQuery({
    queryKey: ["word", word],
    queryFn: async () => {
      const response = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en_US/${word}`,
      );
      const result = await response.json();
      return result;
    },
    enabled: !!word,
  });

  return (
    <div>
      {isLoading && <div>Loading...</div>}
      {isError && <div>{error.message}</div>}
      {data && data.length > 0 ? (
        <div>
          <h2>{data[0].word}</h2>
          <div>
            {data[0].meanings.map((meaning, index) => (
              <div key={index}>
                <h4>{meaning.partOfSpeech}</h4>
                {meaning.definitions.map((definition, defIndex) => (
                  <div key={defIndex}>
                    <p>{definition.definition}</p>
                    {definition.example && <p>{definition.example}</p>}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div style={{ color: "orange" }}>No results found</div>
      )}
    </div>
  );
}

export default Results;
