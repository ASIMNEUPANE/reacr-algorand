import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FormField from '../components/FormField';
import Loader from '@/components/Loader';
import CustomButton from '@/components/CustomButton';

const CreateCampaign = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState({
    name: '',
    title: '',
    description: '',
    target: '',
    deadline: '',
    image: '',
  });

 

  const handleSubmit = async () => {
    // e.preventDefault();

    // checkIfImage(form.image, async (exists) => {
    //   if (exists) {
    //     setIsLoading(true);
    //     await createCampaign({ ...form, target: ethers.utils.parseUnits(form.target, 18) });
    //     setIsLoading(false);
    //     navigate('/');
    //   } else {
    //     alert('Provide valid image URL');
    //     setForm({ ...form, image: '' });
    //   }
    // });
  };

  return (
    <div className="bg-[#1c1c24] flex justify-center items-center flex-col rounded-[10px] sm:p-10 p-4">
      {isLoading && <Loader />}
      <div className="flex justify-center items-center p-[16px] sm:min-w-[380px] bg-[#3a3a43] rounded-[10px]">
        <h1 className="font-epilogue font-bold sm:text-[25px] text-[18px] leading-[38px] text-white">Create a Project</h1>
      </div>

      <form onSubmit={handleSubmit} className="w-full mt-[65px] flex flex-col gap-[30px]">
        <div className="flex flex-wrap gap-[40px]">
          <FormField
            labelName="Project Name *"
            placeholder="Giga "
            inputType="text"
            isTextArea={false}
            value={''}
            handleChange={function (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void {
              throw new Error('Function not implemented.');
            }} // value={form.name}
            // handleChange={(e) => handleFormFieldChange('name', e)}
          />
          <FormField
            labelName="Token Name *"
            placeholder="raht-token"
            inputType="text"
            isTextArea={false}
            value={''}
            handleChange={function (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void {
              throw new Error('Function not implemented.');
            }} // value={form.title}
            // handleChange={(e) => handleFormFieldChange('title', e)}
          />
          <FormField
            labelName="Token Id *"
            placeholder="raht-token-id"
            inputType="text"
            isTextArea={false}
            value={''}
            handleChange={function (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void {
              throw new Error('Function not implemented.');
            }} // value={form.title}
            // handleChange={(e) => handleFormFieldChange('title', e)}
          />
        </div>

        <FormField
          labelName="Description *"
          placeholder="details about the project"
          isTextArea
          inputType={''}
          value={''}
          handleChange={function (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void {
            throw new Error('Function not implemented.');
          }} // value={form.description}
          // handleChange={(e) => handleFormFieldChange('description', e)}
        />

        {/* <div className="w-full flex justify-start items-center p-4 bg-[#8c6dfd] h-[120px] rounded-[10px]">
          <img src={money} alt="money" className="w-[40px] h-[40px] object-contain"/>
          <h4 className="font-epilogue font-bold text-[25px] text-white ml-[20px]">You will get 100% of the raised amount</h4>
        </div> */}

        {/* <div className="flex flex-wrap gap-[40px]">
          <FormField 
            labelName="Goal *"
            placeholder="ETH 0.50"
            inputType="text"
            value={form.target}
            handleChange={(e) => handleFormFieldChange('target', e)}
          />
          <FormField 
            labelName="End Date *"
            placeholder="End Date"
            inputType="date"
            value={form.deadline}
            handleChange={(e) => handleFormFieldChange('deadline', e)}
          />
        </div> */}

        {/* <FormField 
            labelName="Campaign image *"
            placeholder="Place image URL of your campaign"
            inputType="url"
            value={form.image}
            handleChange={(e) => handleFormFieldChange('image', e)}
          /> */}

        <div className="flex justify-center items-center mt-[40px]">
          <CustomButton btnType="submit" title="Create New Project" styles="bg-[#1dc071]" handleClick={undefined} />
        </div>
      </form>
    </div>
  );
};

export default CreateCampaign;
