import React,{useState,useEffect} from 'react';

const MyComponent = () => {

    const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

    useEffect(() => {
        fetch("https://statsapi.web.nhl.com/api/v1/teams/5/stats")
          .then(res => res.json())
          .then(
            (result) => {
                setItems(result.stats) 
              setIsLoaded(true);
             
         
            
            },
            (error) => {
              setIsLoaded(true);
              setError(error);
            }
          )
      }, [])
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (
          <ul>
              {items[0].type.displayName}
          </ul>
        );
      }
}

export default MyComponent
