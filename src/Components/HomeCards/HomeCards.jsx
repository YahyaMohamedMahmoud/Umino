
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProduct } from "../../ReduxToolkit/slices/productSlice";


export default function HomeCards() {
    const state = useSelector((state)=> state.product)
    const { women } = state;
    let currentPage = 1;
    let recordsPerPage = 8;
    let indexOfLastRecord = currentPage * recordsPerPage;
    let indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
    let currentRecords = women.slice(indexOfFirstRecord, indexOfLastRecord);
  
    const dipatch = useDispatch()
    useEffect(()=>{
      dipatch(fetchProduct())
    },[dipatch])

  return currentRecords
}
