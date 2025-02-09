import { useForm } from "react-hook-form"
import './App.css'

function App() {

  const {
    register,
    handleSubmit,watch,formState:{errors,isSubmitting},
  }=useForm();

  async function onSubmit(data){
    // API cal 
    await new Promise(
      (resolve)=>setTimeout(resolve,5000));
    console.log("Submitting the form ",data);
  }
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>First Name : </label>
        <input {...register('firstName',
          {
            required:true,
            maxLength:{value:6,message:"max len should not be greacter than 6"},
            minLength:{value:3,message:"min length atleast 3"},
          })}/>
          {errors.firstName && <p className="error-message" >{errors.message}</p>}
        <br/>
        <br/>
        <label>Middle Name : </label>
        <input {...register('midName')}/>
        <br/><br/>
        <label>Last Name : </label>
        <input {...register('lastName')}/>
        <br/><br/>
        <input type="submit" disabled={isSubmitting} value={isSubmitting?"Submitting":"submit"}/>
      </form>
    </>
  )
}

export default App
