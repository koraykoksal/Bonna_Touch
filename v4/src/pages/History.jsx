import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, CardActionArea, Container } from '@mui/material';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { FaHeart } from "react-icons/fa";
import ImageDetail_Modal from '../components/modals/ImageDetail_Modal';
import useDalleCall from '../hooks/useDalleCall';



export default function History() {

  const { post_imageDataDB } = useDalleCall()
  const { leonardoGenerationAllData } = useSelector((state) => state.touch)
  const [selectedData, setSelectedData] = useState([]);



  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false)
  }


  // FaHeart'ların tıklama durumunu saklamak için bir state oluşturun
  const [selectedIds, setSelectedIds] = useState(() => {
    // Local storage'dan önceki durumu yükle
    const saved = localStorage.getItem('selectedHearts');
    return saved ? JSON.parse(saved) : {};
  });


  // Seçili ID'leri local storage'da sakla
  useEffect(() => {
    localStorage.setItem('selectedHearts', JSON.stringify(selectedIds));
  }, [selectedIds]);


  // FaHeart tıklama işlevi
  const toggleHeart = (id, data) => {

    setSelectedIds(prev => {
      const newSelected = { ...prev, [id]: !prev[id] };
      return newSelected;
    });

    if (!selectedIds[id]) {
      //! like butonuna basıldığında hook çalıştır
      post_imageDataDB(id, data, {likeStatus:true})
    }
    else {
      //! like butonuna basıldığında hook çalıştır
      post_imageDataDB(id, data, {likeStatus:false})
    }


  };


  const handleCardClick = (data) => {
    setSelectedData(data);
    setOpen(true);
  };



  return (

    <Box sx={{ minHeight: '900px', py: 5 }}>


      <Box sx={{ display: 'flex', flexWrap: 'wrap-reverse', justifyContent: 'center', gap: 2, pt: 5 }}>


        {leonardoGenerationAllData?.map((data, index) => (

          <Card sx={{ maxWidth: 380, boxShadow: 0, backgroundColor: '#d8d8d8' }} key={data.id}>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>

              {/* <a href={data.url} target='_blank'> */}
              <CardMedia
                component="img"
                height="290"
                image={data.url}
                sx={{ borderRadius: '0.5rem', cursor: 'pointer' }}
                onClick={() => handleCardClick(data)}
              />
              {/* </a> */}

              <Box display={'flex'} justifyContent={'flex-start'}>
                <FaHeart size={25} onClick={() => toggleHeart(data.id, data)}
                  color={selectedIds[data.id] ? 'red' : 'grey'} cursor={'pointer'} />
              </Box>

            </Box>
          </Card>

        ))}

        <ImageDetail_Modal open={open} handleClose={handleClose} selectedData={selectedData} />

      </Box>
    </Box>


  );
}