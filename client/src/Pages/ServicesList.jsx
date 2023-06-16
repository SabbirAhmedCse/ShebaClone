import { useState, useEffect } from 'react';
import { Table, TableHeader, Pagination, Search, Button} from 'semantic-ui-react'
import { useNavigate } from 'react-router-dom'
import CommonTable from '../Components/Table';
import commonDataAccess from '../dataAccess/CommonDataAccess';
import config from '../utils/config';

export default function ServicesList() {
    const [data, setData] = useState([]);
    const nav = useNavigate();
    const url = `${config.baseUrl}/Service`;
  
    const Columns = [
      {
        name: "Category",
        value: "category"
      },
      {
        name: "Sub Category",
        value: "subCategory"
      },
      {
        name: "Description",
        value: "description"
      },
      {
        name: "Price",
        value: "price"
      },
      {
        name: "Image Url",
        value: "imageUrl"
      },
    ];
    const actions = ["Details", "Update"];
  
    useEffect(() => {
      commonDataAccess.get(url)
        .then((serviceData) => {
          commonDataAccess.get(url + '/categories')
            .then((categoryData) => {
              const updatedData = serviceData.map((service) => {
                console.log('Service:', service);
                const category = categoryData.find((category) => category.id === service.servicesCategoryId);
                console.log('Category:', category);
                if (category) {
                  return {
                    ...service,
                    category: category.categoryName
                  };
                }
                return service;
              });
              setData(updatedData);
            })
            .catch((error) => {
              console.error('Error fetching category data:', error);
            });
        })
        .catch((error) => {
          console.error('Error fetching service data:', error);
        });
    }, [url]);
  
    const functions = [
      (id) => nav('/ServiceDetails', { state: { link: { url, id } } }),
      (id) => nav('/UpdateService', { state: { link: { url, id } } }),
    ];
  
    console.log(data);
  
    return (
      <div className="servicelist">
        <div className="main">
          <h2>Service Lists</h2>
        </div>
        <Button primary type="submit" onClick={() => nav('/CreateService', { state: url })}>Create Service</Button>
        <CommonTable data={data} Columns={Columns} actions={actions} functions={functions} />
      </div>
    );
  }
  
  