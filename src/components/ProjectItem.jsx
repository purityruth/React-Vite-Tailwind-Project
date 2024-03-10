import React, { useState, useEffect } from 'react';

const ProjectItem = ({ img, title, description, overview, role, technologies }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);


  return (
    <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 group hover:bg-gradient-to-r from-gray-200 to-[#472a70]'>
      <img src={img} alt="/" className='rounded-xl group-hover:opacity-10'/>
      <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
        <h3 className='text-2xl font-bold text-white tracking-wider text-center'>
          {title}
        </h3>
        <p className='pb-4 pt-2 text-white text-center'>{description}</p>

        <p className='text-center m-1 rounded-lg bg-white text-gray-700 font-bold cursor-pointer text-lg'
          onClick={openModal}>
          More Info
        </p>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[9]" onClick={closeModal}>
          <div className="bg-white p-8 rounded-lg w-2/3 max-h-full overflow-y-auto">
            <div className="grid sm:grid-cols-2 gap-12">
              <div className="col-span-1 mt-6">
                <h2 className="text-3xl font-bold mb-4">{title}</h2>
                <p className="text-gray-700">{description}</p>
              </div>
              <div className="col-span-1 w-full">
                <img
                  src={img}
                  alt="Project Image"
                  className="pt-5 object-cover object-left rounded-lg"
                />
              </div>
            </div>
            <div className="mt-4">
              <h2 className='text-[#472a70] font-bold mb-4'>Overview:</h2>
              <p className="text-gray-700">
                {overview}
              </p>

              <h2 className='text-[#472a70] font-bold mb-4 mt-3'>Technologies used:</h2>
              <p className="text-gray-700">
                {technologies}
              </p>

              <h2 className='text-[#472a70] font-bold mb-4 mt-3'>My Role:</h2>
              <p className="text-gray-700">
                {role}
              </p>
            </div>
            <button
              className="mt-4 p-3 rounded-lg bg-[#472a70] text-white font-bold"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>

  );
};

export default ProjectItem;
