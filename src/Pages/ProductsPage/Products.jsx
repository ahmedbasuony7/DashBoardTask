
//  import  App Basr search field
import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';

// import  table
import { DataGrid } from '@mui/x-data-grid';


//  import  materials  Icon
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import {  rows } from '../../Data/Data';
import { Avatar } from '@mui/material';



function   Products (  ) {

  const columns = React.useMemo(
    () => [
      {
        field: 'img',
        headerName: '',
        width: 100,
        renderCell: (params) => (
          <Box   className='  px-4  ' >
              <Avatar  className='mt-2  px-0' src={params.row.img} variant="rounded" />

          </Box>        ),
        sortable: false,
        filterable: false,
        align:"center" 
      },
      { field: 'ItemName', headerName: 'ItemName', width: 300 ,  headerAlign:"left" },
      { field: 'Price', headerName: 'Price', width: 100 , headerAlign:"center"},
      { field: 'stock', headerName: 'stock', width: 100 , headerAlign:"center" , align:"center" },
      { field: 'Category', headerName: 'Category', width: 100 , headerAlign:"center" 
    },
      { field: 'Rating', headerName: 'Rating', width: 200 , headerAlign:"center"},
      { field: 'Actions', headerName: 'Actions', width: 100 , headerAlign:"center"   , align:"center"  },

    ],
    []
  );

    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
          backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing(1),
          width: 'auto',
        },
      }));
      
      const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }));
      
      const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',
        width: '100%',
        '& .MuiInputBase-input': {
          padding: theme.spacing(1, 1, 1, 0),
          // vertical padding + font size from searchIcon
          paddingLeft: `calc(1em + ${theme.spacing(4)})`,
          transition: theme.transitions.create('width'),
          [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
              width: '20ch',
            },
          },
        },
      }));

    
    
      return(
        <>
            <div  className=""   style={{  backgroundColor:"#eee"  , height:"206vh" }}  >
                <div className="container"  style={{position:"relative"}} >
                    <div  className="  "   style={{padding:"40px 0px 0px 40px" , fontWeight:"meduim" , fontSize:"22px"}}  >
                        <p  style={{width:"200px"}}> Products </p> 
                    </div>

                    <div  style={{}}>
                        <div  className='RigthBox p-2 '  style={{ position:"absolute"  , left:"95%" , top:"20%",  backgroundColor:"white", height:"180px" , textAlign:"center" , width:"60px" }}>
                            <button  className='p-2'  style={{   backgroundColor:"#eee"  , border:"none" }}>  
                                <span   className=''  style={{color:"#3F80Ea"}}>  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sliders-vertical lucide align-middle"><line x1="4" x2="4" y1="21" y2="14"></line><line x1="4" x2="4" y1="10" y2="3"></line><line x1="12" x2="12" y1="21" y2="12"></line><line x1="12" x2="12" y1="8" y2="3"></line><line x1="20" x2="20" y1="21" y2="16"></line><line x1="20" x2="20" y1="12" y2="3"></line><line x1="2" x2="6" y1="14" y2="14"></line><line x1="10" x2="14" y1="8" y2="8"></line><line x1="18" x2="22" y1="16" y2="16"></line></svg> </span>
                                <span  className='mt-2 '  style={{writingMode:"vertical-rl" , color:"#3F80Ea"  }}>
                                    Builder
                                </span>
                            </button>

                            <p  className='p-2   mt-2'   style={{backgroundColor:"#eee", width:"40px"}}> 
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-book-open lucide align-middle"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg> 
                            </p>
                        </div>
                    </div>

                    <div  className="content"  style={{height:"100vh" , margin:"0px  40px 0px 40px" ,  backgroundColor:"white" }}  >
                        <div  className="  d-flex  align-items-center justify-content-between"  style={{ padding:"15px" }}>
                            <div className=" "  >
                                <Search  style={{width:"300px" , backgroundColor:"#eee" }}  >
                                    <SearchIconWrapper>
                                        <SearchIcon />
                                    </SearchIconWrapper>
                                    <StyledInputBase
                                        placeholder="Search…"
                                        inputProps={{ 'aria-label': 'search' }}
                                    />
                                </Search>
                            </div>

                            <div  className=" d-flex  "  >
                                <buttons  className=" d-flex  btn    btn-light  "  style={{backgroundColor:"#eee"  ,margin:"10px"}}  >
                                    <FileDownloadOutlinedIcon />
                                    Export
                                </buttons>

                                <buttons  className=" d-flex    btn btn-primary "  style={{margin:"10px"}}  >
                                    +
                                    Add New Product
                                </buttons>
                                
                            </div>

                        </div>

                        <div  className="table  p-4" >
                              <Box sx={{ height: 600, width: '100%' }}>
                                <DataGrid
                                  rows={rows}
                                  columns={columns}
                                  
                                  initialState={{
                                    pagination: {
                                      paginationModel: {
                                        pageSize: 6,
                                      },
                                    },
                                  }}
                                  pageSizeOptions={[6]}
                                  checkboxSelection
                                  disableRowSelectionOnClick
                                  getRowSpacing={params => ({
                                    top:params.isFirstVisible ? 0 :10, 
                                    bottom:params.isLastVisible ? 0 :10 

                                  })}
                                />
                              </Box>
                        </div>
                        
                    </div>

                    <br />
                    <br />
                </div>

                <div  className='footer  d-flex  px-3  align-items-center   justify-content-between' style={{height:"50px" , margin:"0px " ,  backgroundColor:"white" }} >
                    <div  className='d-flex  align-items-center   ml-5   pt-3  gap-3 '>
                          <p> Support </p>
                          <p> Help Center </p>
                          <p> Privacy </p>
                          <p> Terms of Service </p>
                    </div>

                    <div  className='  pt-3  '  style={{marginRight:"40px"}}>
                      <p> © 2024 - AppStack </p>
                    </div>
                </div>

            </div>

        </>
    )
    
}

export  default  Products;


