const routes = [
  { path: "/admin", exact: true, name: "Dashboard" },
  { path: "/admin/drugs", exact: true, name: "Drugs" },
  { path: "/admin/add-drug", exact: true, name: "Add Drug" },
  { path: "/project", exact: true, name: "Project" },
  { path: "/project/add-project", name: "Add Project" },
  { path: "/project/Update", name: "Update Project" },
  { path: "/project/import", name: "Import Villa" },
  { path: "/blog", name: "Blog" },
  { path: "/blog/add-blog", name: "Add Blog" },
  { path: "/blog/Update", name: "Update Blog" },
  { path: "/blog/categories", name: "Manage Categories" },
  { path: "/user", name: "Manage User" },
];

export default routes;
