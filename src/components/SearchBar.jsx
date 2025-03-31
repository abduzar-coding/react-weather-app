import { motion } from 'framer-motion'

function SearchBar({ city, setCity, handleSearch, darkMode, setDarkMode }) {
  return (
    <motion.div
      className="flex gap-2 mb-6 w-full max-w-md"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.5, type: 'spring' }}
    >
      <input
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="flex-1 px-4 py-2 rounded-lg text-black focus:outline-none"
      />
      <button
        onClick={handleSearch}
        className="bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition"
      >
        Search
      </button>
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="px-4 py-2 rounded-lg shadow bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100"
      >
        {darkMode ? '☀️' : '🌙'}
      </button>
    </motion.div>
  )
}

export default SearchBar
