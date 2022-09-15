const [reviewWords, setReviewWords] = useState([]);
const [loading, setLoading] = useState(false);
const [error, setError] = useState(null);

const clickSearch = () => {
  const selectedHotelName = document.querySelector('#hotels-select').value;
    
  fetchReviewAPI(selectedHotelName);
};

const fetchReviewAPI = async(value) => {
  try {
    setError(null);
    setLoading(true);

    const response = await axios.post('http://localhost:3001/api/hotel_review', { name: value });
    const reviewArray = getBasicWord(response.data).split(',');

    setReviewWords(reviewArray);
  } catch (e) {
    setError(e);
  }
  setLoading(false);
};