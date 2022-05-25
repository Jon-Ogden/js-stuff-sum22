const fakeAPICall = (url) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
          if(url === 'goodurl'){
              resolve({data:['sally','john']})
          } else {
              reject({error:'404 page not found'})
          }
      }, 2000);
    });
  };

  const getData = async () => {
      console.log('before api call')
      let response = await fakeAPICall('goodurl')
      console.log('after api call')
      console.log('response', response)
  }

  console.log('before getData')
  getData()
  console.log('after getData')