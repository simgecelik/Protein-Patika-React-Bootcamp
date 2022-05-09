import React, { useState } from 'react';
import { Formik } from 'formik';
import clsx from 'clsx';
import { toast } from 'react-toastify';
import { LoginSchema } from '../constants/yupSchema';
import LoadingSvg from '../constants/loading';
import Darklight from '../component/darklight';
import { useEffect } from 'react';

export default function Login() {
  const [loading, setLoading] = useState(false);


  const setServer = (auth) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.error('Sistem kaydınız başarıyla gerçekleşmiştir', 2000);
    }, 3000);
  }


  

 	return (
		<> 
   
      <div className="formContainer">
       
        <div className="form">
        
          <h3 className='title'>
            <strong >Kayıt</strong>
            <Darklight />
          </h3>
          
          {
            
            <Formik
            initialValues={{
              name:'',
              surname:'',
              email: '',
              password: '',
              username:'',
              check:'false',

            }}
            onSubmit={auth => {
              setServer(auth);
            }}
            validationSchema={LoginSchema}
          >
            {
              ({ values, handleChange, handleSubmit, errors }) =>
                <form>

                  <div >
                   <div className={clsx('formGroup', {'formError': !!errors.name})} style={{float:'left',marginRight:"15px"}}  >
                    <label className='required2 title'>İSİM</label>
                    <input
                      type="text"
                      name="name"
                      placeholder='İsmini gir'
                      value={values.name}
                      onChange={handleChange}
                      style={{ width: '200px'}}
                      />
                    <span>{errors.surname}</span>
                    </div>

                    <div className={clsx('formGroup', {'formError': !!errors.name})}   >
                    <label className='required2 title'>SOYİSİM</label>
                    <input
                      type="text"
                      name="surname"
                      placeholder='Soyismini gir'
                      value={values.surname}
                      onChange={handleChange}
                      style={{ width: '200px'}}
                      />
                    <span>{errors.surname}</span>
                    </div>
                    </div>

                  <div className={clsx('formGroup', {'formError': !!errors.email})}>
                    <label className='required title'>E-POSTA</label>
                    <input
                      type="text"
                      name="email"
                      placeholder='E-posta adresini gir'
                      value={values.email}
                      onChange={handleChange}
                      />
                    <span>{errors.email}</span>
                  </div>
                  
                  <div className={clsx('formGroup', {'formError': !!errors.username})}>
                    <label className='required title'>KULLANICI ADI</label>
                    <input
                      type="text"
                      name="username"
                      placeholder='Kullanıcı adını gir'
                      value={values.username}
                      onChange={handleChange}
                      />
                    <span>{errors.username}</span>
                  </div>

                  <div className={clsx('formGroup', {'formError': !!errors.password})}>
                    <label className='required title'>ŞİFRE</label>
                    <input
                      type="password"
                      name="password"
                      placeholder='Şifreni gir'
                      value={values.password}
                      onChange={handleChange}
                      />
                    <span>{errors.password}</span>
                  </div>
                  <div className={clsx('formGroup', {'formError': !!errors.confirmpassword})}>
                    <label className='required title'>ŞİFRENİ TEKRAR GİR</label>
                    <input
                      type="password"
                      name="confirmpassword"
                      placeholder='Şifreni doğrula'
                      value={values.confirmpassword}
                      onChange={handleChange}
                      />
                    <span>{errors.confirmpassword}</span>
                  </div>
                  
                  <div className={clsx('formGroup', {'formError': !!errors.agreement})} style={{float:"left"}}>
                    <label className='required2 title' style={{color:'#8E8E8E', fontSize: '16px'}}>
                    <input
                      type="checkbox"
                      name="check"
                      value={values.check}
                      onChange={handleChange}
                      />
                    Sözleşmeyi kabul ediyorum.
                    <span style={{color:'red'}}>{errors.check}</span>
                   
                    </label>
                  </div>



                  <div className='formGroup formButton' style={{clear:'both'}}>
                    <button className='loginButton' type='submit' onClick={handleSubmit} disabled={loading} >
                      {
                        loading ? <LoadingSvg size={50} /> : 'KAYIT OL'
                      }
                      
                    </button>
                    <span></span>
                  </div>
                </form>
            }


          </Formik>
          }

        </div>
      </div>
		</>
	)
}
