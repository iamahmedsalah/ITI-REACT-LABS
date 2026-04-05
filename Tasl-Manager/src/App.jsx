
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import HomePage from './pages/home';
import ProfilePage from './pages/profile';
import TasksPage from './pages/task';
import TaskDetailsPage from './components/task/TaskDetails';



function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="tasks" element={<TasksPage />} />
          <Route path="tasks/:id" element={<TaskDetailsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
