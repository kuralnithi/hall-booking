
API LIST

* TO create a room(POST) - http://localhost:4000/api/hall/createroom
                     
                * Send room details in body as json
                    
                    BODY EXAMPLE:
                             {
                                    "number of seats availabe": "200",
                                    "Aminities": " --- A/C and NON-A/C rooms--\n ---Parking fesilities---\n ---Kitchen and Food preparation area ",
                                    "Price for 1 Hour": "Just only RS 1000" 
                                  }


* To Book a room(POST)    - http://localhost:4000/api/hall/book

                * Send details in body as json

                   BODY EXAMPLE:
                        {
                        "CustomerName":"Karthik",
                        "BookDate":"04.10.2023",
                        "StartTime":"6PM",
                        "EndTime":"10PM",
                        "RoomName":"A100"
                        }


*   To get all the booked room data(GET) - http://localhost:4000/api/hall/bookedrooms


*   To get all the booked customer data(GET) - http://localhost:4000/api/hall/allcustomers


*   To get data of how many times a customer booked rooms(GET)  - http://localhost:4000/api/hall/customerdetails

                    BODY EXAMPLE:           
                        { "CustomerName":"Karthik"}
