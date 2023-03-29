import ReactDrag from "./ReactDrag";
import ReactDrop from "./ReactDrop";
import { useDrop } from 'react-dnd';
import { useRef, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Image from "next/image";
import swal from "sweetalert";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

const dragItems = [
   {
      title: "Question",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
      id: 1
   },
   {
      title: "Multiple choices",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
      id: 2
   },
   {
      title: "Paragraph",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
      id: 3
   },
   {
      title: "Date & Time picker",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
      id: 4
   },
   {
      title: "Location picker",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
      id: 5
   }

]

const ReactDragAndDrop = () => {
   const myLoader = ({ src, width }) => {
      return `${src}?w=${width}`;
   }

   const [searches, setSearches] = useState(dragItems)

   const serach = (e) => {
      const searchText = e.target.value
      const match = dragItems.filter(item => item.title.toLowerCase().includes(searchText.trim().toLowerCase()))
      setSearches(match);
   }

   const [{ isOver }, drop] = useDrop(() => ({
      accept: "div",
      drop: (item) => addItem(item.id),
      collect: (monitor) => ({
         isOver: !!monitor.isOver()
      })
   }))

   const [dropItems, setDropItems] = useState([]);
   const addItem = (id) => {
      const dragedItems = dragItems.filter(i => id === i.id)
      setDropItems((dropItems) => [...dropItems, dragedItems[0]])
   }

   const handleTitle = (index, event) => {

      let obj = dropItems[index];
      obj.inputTitle = event.target.value;
      // console.log(dropItems)
   }


   const handleDescription = (index, event) => {

      let obj = dropItems[index];
      obj.inputDescription = event.target.value;
   }





   const { auth } = useContext(AuthContext);

   const [user] = auth;
   const creatorId = user?.userId ? user?.userId : user?._id;
   const untitleRef = useRef();
   const descriptionRef = useRef();
   const submit = () => {

      const unTitleActivity = untitleRef.current.value;
      const addDescription = descriptionRef.current.value;

      const allData = {
         dropItems, unTitleActivity, addDescription, creatorId
      }
      console.log(allData)
      if(!creatorId){
         swal({

            text: "You have to login first",
            icon: "warning",
         })
         return;
      }
      if (!unTitleActivity) {
         swal({

            text: "Untitled activity is missing",
            icon: "warning",
         })
         return;
      }
      if (!addDescription) {
         swal({

            text: "Add description is missing",
            icon: "warning",
         })
         return;
      }

      for (const i of dropItems) {
         if (!i.inputTitle) {
            swal({

               text: "Your input is missing",
               icon: "warning",
            })
            return
         }
         if (!i.inputDescription) {
            swal({

               text: "Your input is missing",
               icon: "warning",
            })
            return
         }
      }


      fetch("http://localhost:4000/api/v1/activity ", {
         method: "POST",
         headers: {
            "content-type": "application/json",
         },
         body: JSON.stringify(allData),
      })
         .then((res) => res.json())
         .then((data) => {
            console.log(data);
            if (data.status === "activity successfully created") {
               untitleRef.current.value = ""
               descriptionRef.current.value = ""
               setDropItems([])

               swal({
                  title: "Good job!",
                  text: "You activity successfully created!",
                  icon: "success",
               });
            }
            else if (data.status === "Failed") {
               swal(data.message, "", "error");
            }
         });












   }

   const onremove = (id) => {
      const remain = dropItems.filter(item => id !== item.id)
      setDropItems(remain);
   }
   return (
      <div className="grid grid-cols-4 min-h-screen  bg-[#ECEBFB] ">
         <div>

            <div className="mb-20">
               <div className="flex items-center ml-10 mt-12">
                  <div className="mr-[12px]">
                     <Image loader={myLoader}
                        width='18px' height="24px"
                        className=" ml-10 mr-3 mt-12"
                        src="/images/logo.png"
                        alt="Bursement Hero Image"
                     />
                  </div>
                  <h1 className="Kn font-normal  text-3xl  h-[30px] block">Bursement</h1>
               </div>
            </div>
            <div className="mb-8 cursor-pointer">
               <p className="Kn font-normal text-[32px] leading-[38px] ml-5 ">Add New</p>
            </div>
            <div className="mb-[34px]">
               <input onChange={serach} style={{ backgroundColor: "#D9D7EF" }} className="ml-5 w-[283px] h-[47px] pl-4 outline-[#4e4bff] placeholder:text-base placeholder:text-black/[0.45]  placeholder:font-Kn rounded-[200px]" type="text" placeholder="Search" />
            </div>
            <div className="ml-5 overflow-y-scroll h-60  example">
               {
                  searches.map(item => {
                     return <ReactDrag key={item.id} id={item.id} title={item.title} description={item.description} ></ReactDrag>
                  })
               }

            </div>



         </div>

         <div className="col-span-3 bg-light-blue h-screen overflow-y-scroll  ">



            {
               dropItems.length > 0 ? <div className=" items-center mt-[34.5px]  grid justify-items-end mr-[46px] mb-0 ">

                  <div className="flex items-center">
                     <div className="mr-6">
                        <button className="border-solid border-2 border-[#4D49FF] px-8 py-4 text-[#4D49FF] rounded-full Dm leading-[23px]
                           text-[18px] font-medium hover:bg-[#4D49FF] hover:text-white  focus:ring-4">Draft Autosaved</button>
                     </div>
                     <div>
                        <button onClick={submit} className="text-white focus:ring-4 bg-[#4D49FF] px-8 py-4 rounded-full Dm leading-[23px]">Publish</button>
                     </div>
                     <div className="ml-[42px] mr-[30px]">
                        <Image loader={myLoader} width='75px' height='75px'
                           className="w-[75px] h-[75px] "
                           src="/images/person1.png"
                           alt="profile pic"
                        />

                     </div>
                     <div className="bg-[#e4e4e7] rounded-full w-8 h-8 flex justify-center items-center " >
                        <button className="">
                           <GiHamburgerMenu></GiHamburgerMenu>
                        </button>
                     </div>
                  </div>
               </div> : <div className="mt-[64.5px]"></div>

            }


            <div className="ml-[99px] mb-[10px] ">
               <input ref={untitleRef} className=" placeholder:text-black/[0.25] border-0 bg-light-blue text-[32px] mt-[100px] Kn outline-none " type="text" name="" id="" placeholder="Untitled Activity" /> <br />
               <input ref={descriptionRef} className="placeholder:text-black/[0.25] outline-none  border-0 bg-light-blue mt-[31px] font-normal " type="text" row='2' name="" id="" placeholder="Add description...." />

            </div>

            <div className="mt-[52px]">
               <div className="bg-light-blue mt-[15.5px]  ">
                  {
                     dropItems.map((item, index) => {

                        return <ReactDrop handleTitle={handleTitle} handleDescription={handleDescription} index={index} onremove={onremove} isOver={isOver} key={item.id} id={item.id} title={item.title} description={item.description} ></ReactDrop>

                     })
                  }
               </div>

               <div ref={drop} className="pt-4 pl-4 pb-4 rounded-[20px]  w-[500px] h-[106px] border-dashed border-[2.5px] mx-auto mb-10	">

                  <div className="flex items-center bg-light-blue ">
                     <div className="w-[74px] h-[74px] rounded-[20px] mr-5 border-dashed border-[2.5px]" >

                     </div>
                     <div className="space-y-[6px]">
                        <p style={{ color: "#BFBDDA" }} className=" leading-[19px]	Kn text-base  font-normal">Drag the activity Blocks over here </p>
                        <p st className="text-[12.5px] leading-[15px] font-normal Kn" style={{ color: "#BFBDDA" }}>Keep dragging Blocks to build your first activity  </p>
                     </div>
                  </div>



               </div>

            </div>

         </div>

      </div>
   );
};

export default ReactDragAndDrop;


