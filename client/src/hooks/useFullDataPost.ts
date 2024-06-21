// useFullDataPost.ts

import { createStartup, prepareStartupData } from "../api/startupApi";


const useFullDataPost = (startupState: any) => {
  const fullDataPost = async () => {
    const postData = prepareStartupData(startupState);

    try {
      const createdStartup = await createStartup(postData);
      console.log('Created startup:', createdStartup);
    } catch (error) {
      console.error('Error creating startup:', error);
      // Обработка ошибки, например, вывод сообщения об ошибке пользователю или запись в лог
    }
  };

  return fullDataPost;
};

export default useFullDataPost;