export default function ItemDateFilter({selectedYear, onFilterYearHandler}){    

    function onFilterDateValue(event){
      onFilterYearHandler(event.target.value)
    }
    
    return(
        <div>
            <label htmlFor="year">Filter by</label>
            <select value={selectedYear} onChange={onFilterDateValue} id="year">                                
                <option value="2019">2019</option>
                <option value="2020">2020</option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>                
            </select>
        </div>
    )
}