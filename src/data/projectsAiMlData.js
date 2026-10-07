import hr_rag from '../assets/png/projects/hr_rag.PNG'
import llm_arean from '../assets/png/projects/llm_arena.PNG'
import website_summarizer from '../assets/png/projects/website_summerizer.PNG'
import quora_duplicate_question from '../assets/png/projects/quora_duplicate_question.PNG'
import customer_segmentation from '../assets/png/projects/customer_segmentation.PNG'
import movie_recommender from '../assets/png/projects/movie_recommender.PNG'
import spam_detector from '../assets/png/projects/spam_detector.PNG'
import car_price_predictor from '../assets/png/projects/car_price_predictor.PNG'




export const projectsData = [
  {
    id: 1,
    projectName: 'HR Policy RAG Application',
    projectDesc: 'A production-ready Retrieval-Augmented Generation (RAG) application for answering questions about company HR policies. ',
    tags: ['Python', 'LangChain', 'Docker', 'AWS ECR', 'AWS ECS','LangSmith','	Qdrant Cloud'],
    code: 'https://github.com/dnyaneshwarmagar/hr_policy_rag_application',
    demo: 'http://ec2-54-80-123-123.compute-1.amazonaws.com:8501/',
    image: hr_rag
  },
  {
    id: 2,
    projectName: 'LLM Arena',
    projectDesc: 'The application sends the same user prompt to two different Large Language Models, displays their responses side-by-side, and allows users to vote for the response they prefer.',
    tags: ['Python','Groq', 'Gradio', 'OpenRouter'],
    code: 'https://github.com/dnyaneshwarmagar/arena_ai_model_comparison',
    demo: 'https://arena-ai-model-comparison.onrender.com/',
    image: llm_arean
  },
  {
    id: 3,
    projectName: 'Quick AI Website Summarizer',
    projectDesc: 'A simple AI-powered tool that fetches the contents of any website and generates a friendly markdown summary.',
    tags: ['Python','Groq', 'Gradio', 'Render'],
    code: 'https://github.com/dnyaneshwarmagar/summarizer_app',
    demo: 'https://summarizer-app-gsry.onrender.com/',
    image: website_summarizer
  },
  {
    id: 4,
    projectName: 'Quora Duplicate Question Detection',
    projectDesc: '',
    tags: ['NLTK','Pandas','FastAPI','NumPy', 'XGBoost', 'Scikit-learn'],
    code: 'https://github.com/dnyaneshwarmagar/quora-duplicate-question-detection',
    demo: 'https://quora-duplicate-question-detection-jcyb.onrender.com/',
    image: quora_duplicate_question
  },
  {
    id: 5,
    projectName: 'Customer Segmentation using K-Means',
    projectDesc: 'A Machine Learning project that performs customer segmentation using the K-Means Clustering algorithm.',
    tags: ['K-Means','Pandas','FastAPI','NumPy', 'Streamlit', 'Scikit-learn'],
    code: 'https://github.com/dnyaneshwarmagar/customer_segmentation_k_means',
    demo: 'https://customer-segmentation-k-means.onrender.com/',
    image: customer_segmentation
  },
  {
    id: 6,
    projectName: 'Movie Recommender System',
    projectDesc: 'An intelligent Content-Based Movie Recommendation System which recommends Movies similar to the selected Movie by analyzing textual features using Natural Language Processing (NLP) and Cosine Similarity.',
    tags: ['LinearRegression','Pandas','Pickle','NumPy', 'Streamlit', 'Cosine Similarity'],
    code: 'https://github.com/dnyaneshwarmagar/movie_recommender_system',
    demo: 'https://book-recommender-system-jmlq.onrender.com/',
    image: movie_recommender
  },
  {
    id: 7,
    projectName: 'Email / SMS Spam Detection System',
    projectDesc: 'This project is a Machine Learning-based Spam Detection System that classifies messages as Ham (Not Spam) or Spam',
    tags: ['Naive Bayes','TF-IDF','Classification','NumPy', 'Streamlit', 'EDA'],
    code: 'https://github.com/dnyaneshwarmagar/email-spam_detector',
    demo: 'https://email-spam-detector-2f9t.onrender.com/',
    image: spam_detector
  },
  {
    id: 8,
    projectName: 'Car Price Predictor',
    projectDesc: 'This project is a Machine Learning-based Car Price Prediction System that predicts the price of a car based on various features such as year, mileage, fuel type, and more.',
    tags: ['LinearRegression','Pandas','Pickle','NumPy', 'Seaborn', 'Scikit-learn'],
    code: 'https://github.com/dnyaneshwarmagar/car_price_predictor',
    demo: 'https://car-price-predictor-zcxz.onrender.com/',
    image: car_price_predictor
  },
 
];

// Do not remove any fields.
// Leave it blank instead as shown below

/* 
{
    id: 1,
    projectName: 'Car Pooling System',
    projectDesc: '',
    tags: ['Flutter', 'React'],
    code: '',
    demo: '',
    image: ''
}, 
*/
