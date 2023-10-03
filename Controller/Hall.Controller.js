//creating a Room details

const Halldetails = {
  
    "number of seats availabe": "200",
    "Aminities": " --- A/C and NON-A/C rooms--\n ---Parking fesilities---\n ---Kitchen and Food preparation area ",
    "Price for 1 Hour": "Just only RS 1000"

};



//BookedRooms
const BookedData = [{
    
    "CustomerName": "nithi",
    "BookDate": "03.10.2023",
    "StartTime": "8AM",
    "EndTime": "2PM",
    "RoomName":"A100",
    "BookingStatus": "Booked",
    "RoomId": 1

},{
        "CustomerName": "Karthik",
        "BookDate": "04.10.2023",
        "StartTime": "8AM",
        "EndTime": "2PM",
        "RoomName": "A100"
    },{
        "CustomerName": "Karthik",
        "BookDate": "04.10.2023",
        "StartTime": "2PM",
        "EndTime": "6PM",
        "RoomName": "A100"
    },{
        "CustomerName": "Karthik",
        "BookDate": "04.10.2023",
        "StartTime": "6PM",
        "EndTime": "10PM",
        "RoomName": "A100"
    }];




//To Book a new room

export const BookARoom = async(req, res) => {
    try {
        const BookingDetails = await req.body;
        
        const { BookDate,StartTime,EndTime} = BookingDetails;

        const count = 0;


        BookedData.map((hallObJ) => {
            

if(hallObJ.BookDate==BookDate&&hallObJ.StartTime==StartTime){
    
    count++;
}
            
                }) 
        
        if (count == 0) {
            BookingDetails.RoomId = BookedData.length + 1;
            BookingDetails.BookedStatus = "Booked";
            BookedData.push(BookingDetails);
            
            return res.status(200).json({
                message: "Room booked", Room: {
                    CustomerName:BookingDetails.CustomerName,
                    BookDate:BookingDetails.BookDate,
                    StartTime:BookingDetails.StartTime,
                    EndTime: BookingDetails.EndTime,
                    RoomName:BookingDetails.RoomName
               
                }
            });
        }
    } catch (error) {
        console.log(error)
             res.status(200).json({ message: "Sorry___ Room Already booked" });
        
    }


} 




export const BookedRooms = async (req, res) => {
    try {
        
        if (BookedData.length == 0) {
    
            res.status(200).json({message:"No rooms booked"})
        }
        else {
            res.status(200).json(BookedData);
            

        }

    } catch (error) {
        console.log(error)
        res.status(500).json({err:"error while  checking the hall" });
        
    }


} 



//To check how many times a customer booked rooms

export const FindCustomerDetails = async (req, res) => {
    try {
        const BookingDetails = await req.body;
        
        const { CustomerName} = BookingDetails;

       let count = 0;
        const CustomerDetails = [];

        BookedData.map((hallObJ) => {
            

            if (hallObJ.CustomerName == CustomerName)
            {
    
                CustomerDetails.push(hallObJ);

                count++;
            }
            


        }) 
        
        
        if (count == 0) {
            
            return res.status(200).json({
                message: "Customer name not found"
            });
        }

        else if (count > 1) {
    

            return res.status(200).json({CustomerCount:count,message: CustomerDetails });
       

            
        }
    
    
    } catch (error) {
        console.log(error)
             res.status(200).json({ message: "error in finding customer details" });
        
    }


} 
