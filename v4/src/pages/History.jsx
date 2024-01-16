import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, CardActionArea, Container } from '@mui/material';
import { useSelector } from 'react-redux';
import { BiDownload } from 'react-icons/bi'
import axios from 'axios'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import moment from 'moment'
import { FaHeart } from "react-icons/fa";



export default function History() {

  const { leonardoGenerationAllData } = useSelector((state) => state.touch)

  const [urls, setUrls] = useState([])




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
  const toggleHeart = (id) => {
    setSelectedIds(prev => {
      const newSelected = { ...prev, [id]: !prev[id] };
      return newSelected;
    });
  };


  return (

    <div>

      <Box sx={{ backgroundColor: '#dddddd', height: '100vh' }}>


        <Box sx={{ display: 'flex', flexWrap: 'wrap-reverse', justifyContent: 'center', gap: 2, pt: 5 }}>


          {leonardoGenerationAllData?.map((data,index) => (

            <Card sx={{ maxWidth: 380, boxShadow: 0, backgroundColor: '#dddddd' }} key={index}>

              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>

                <a href={data.url} target='_blank'>
                  <CardMedia
                    component="img"
                    height="290"
                    image={data.url}
                    sx={{ borderRadius: '0.5rem' }}
                  />
                </a>

                <FaHeart onClick={() => toggleHeart(index)}
                  color={selectedIds[index] ? 'red' : 'grey'} cursor={'pointer'} />
              </Box>

            </Card>

          ))}


        </Box>
      </Box>

    </div>
  );
}