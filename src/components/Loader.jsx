function Loader() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="animate-spin rounded-full h-20 w-20 border-t-4 border-yellow-400"></div>
      <span className="ml-6 text-yellow-400 text-xl font-bold animate-pulse">Chargement...</span>
    </div>
  )
}

export default Loader
