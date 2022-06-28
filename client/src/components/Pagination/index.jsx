import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { pageSetter } from "../../redux/actions";
import Button from "../../styledComponents/Button";

export default function Pagination () {
   const dispatch = useDispatch();
   const page = useSelector(state => state.pages);
   const [ pages, setPages ] = useState(page);
   const properties = useSelector(state => state.properties);

   useEffect(() => {
      dispatch(pageSetter(pages));
      return () => dispatch(pageSetter(pages));

   }, [pages]);

   const indexes = [];
   let indexAmount = properties && Math.ceil(properties.length / 10);
   for (let i=1; i < indexAmount+1; i++) indexes.push(i); 
   
   const pageManager = index => {
      let firstProperty = 1;
      let lastProperty = 10;
      if (index > 1) {
         firstProperty = (10 * (index-1)) + 1;
         lastProperty = 10 * index;
      }
      setPages([index, firstProperty, lastProperty]);
   };

   return (
      <div>
         {indexes && indexes.map(i => {
            return <Button className="paginationHome" key={i} onClick={() => pageManager(i)}>{i}</Button>
         })}
      </div>
   );
};