
const imgPreview=document.getElementById('img-preview');
const imgUploader= document.getElementById('img-uploader');
const imgBar=document.getElementById('img-bar');

const CLOUDINARY_URL='https://api.cloudinary.com/v1_1/dncmaocxy/image/upload';
const CLOUDINARY_UPLOAD_PRESET='ml_default';

imgUploader.addEventListener('change',async(e) =>{
    const file=e.target.files[0];

    const formData = new FormData();
    formData.append('file',file);
    formData.append('upload_preset',CLOUDINARY_UPLOAD_PRESET);

    const res= await axios.post(CLOUDINARY_URL,formData,{
        headers:{
            'Content-Type':'multipart/form-data'
        },
        onUploadProgress(){
            const progress= (e.loaded*100)/e.total;
            imgBar.setAttribute('value',progress);
        }
    });
    console.log(res);   
    imgPreview.src=res.data.secure_url;
});

