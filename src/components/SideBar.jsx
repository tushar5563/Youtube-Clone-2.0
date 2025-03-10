import { Stack } from "@mui/material"
import { categories } from "../utils/constants"
import { Category } from "@mui/icons-material"
// const  selectedCategory='New';
const SideBar = ({selectedCategory,setSelectedCategory}) =>
   (
   <Stack direction="row" sx={{overflowY:'auto',height:{sx:'auto',md:'95%'},flexDirection:{md:'column'},}}>
{categories.map((category)=>(
    <button className="category-btn" 
    onClick={()=>setSelectedCategory(category.name)}
    style={{background:category.name===selectedCategory && '#FC1503',color:'white'
  }}
  key={category.name}
>
        <span style={{color:category.name===selectedCategory? 'white': 'red',marginRight:'15px'}}> {category.icon}</span>
        <span style={{opacity:category.name===selectedCategory? '1': '0.7'}}>{category.name}</span>
    </button>
))}
   </Stack>
  )


export default SideBar