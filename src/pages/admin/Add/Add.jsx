import React, { useContext } from 'react'
import { Formik } from 'formik';
import { v4 as uuidv4 } from 'uuid';
import MainContext from '../../../context/context';
import axios from 'axios';


const Add = () => {
    const{data, setData}=useContext(MainContext)
  return (
    <div>
     <h1>Anywhere in your app!</h1>
     <Formik
       initialValues={{ image: '', name: '', description: '', price: ''}}
       validate={values => {
       }}
       onSubmit={(values, { setSubmitting }) => {
        axios.post('http://localhost:3000/products', {
            id: uuidv4(),
            image: values.thumbnail,
            name: values.title,
            description: values.description,
            price: values.price
          }).then(res=>{
            setData([...data, res.data])
            ;
          })
        }
       }
     >
       {({
         values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
         isSubmitting,
         /* and other goodies */
       }) => (
         <form onSubmit={handleSubmit}>
         <input
             type="text"
             name="thumbnail"
             placeholder='thumbnail'
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.thumbnail}
           />
           {errors.thumbnail && touched.thumbnail && errors.thumbnail}
           <input
             type="text"
             name="title"
             placeholder='title'
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.title}
           />
           {errors.title && touched.title && errors.title}
           <input
             type="text"
             name="description"
             placeholder='description'
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.description}
           />
           {errors.description && touched.description && errors.description}
           <input
             type="text"
             name="price"
             placeholder='price'
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.price}
           />
           {errors.price && touched.price && errors.price}
           <button type="submit" disabled={isSubmitting}>
             Submit
           </button>
         </form>
       )}
     </Formik>
   </div>
  )
}

export default Add