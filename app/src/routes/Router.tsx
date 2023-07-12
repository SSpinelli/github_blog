import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Post } from "../pages/Post";
import { DefaultLayout } from "../layout/DefaultLayout";

export function Router() {
  return (
    <Routes>
      <Route>
        <Route path="/" element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route path="/:postId" element={<Post />} />
      </Route>
    </Routes>
  )
}