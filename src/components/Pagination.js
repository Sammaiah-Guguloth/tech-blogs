import { useContext } from "react";
import { AppContext } from "../context/AppContext";

function Pagination() {

  const {page , totalPages, handlePageChange} = useContext(AppContext)

  return (
    <div className="w-full border border-t-1 shadow-md py-1 flex justify-center items-center fixed bottom-0 bg-white  ">
        <div className="w-11/12 max-w-[600px] flex justify-between px-2">
          <div className="flex gap-x-3">

              { page > 1 &&
                  (<button 
                    className=" border-2  shadow-sm rounded-md p-2"
                  
                  onClick={() => handlePageChange(page-1)}>
                    Previous
                  </button>)
                
              }

              { page < totalPages &&
                  (<button 
                    className=" border-2  shadow-sm rounded-md p-2"
                  onClick={() => handlePageChange(page+1)}>
                      Next
                  </button>)

              }
          </div>

          <p className="self-center">
              Page {page} of {totalPages}
          </p>
        </div>
    </div>
  )
}

export default Pagination;