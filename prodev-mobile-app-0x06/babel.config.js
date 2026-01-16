# 1. Duplicate the project
cp -r prodev-mobile-app-0x05 prodev-mobile-app-0x06
cd prodev-mobile-app-0x06

# 2. Re-verify NativeWind dependencies (if not already present)
npm install nativewind
npm install --save-dev tailwindcss@3.3.2

# 3. Organize Styles directory
mkdir -p styles
# Move your global.css if it exists in root
mv global.css styles/global.css 2>/dev/null || touch styles/global.css

#tailwind.config.js

module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};

#babel.config.js

module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: ["nativewind/babel"],
  };
};

// Inside app/(home)/_layout.tsx
<Tabs.Screen 
  name="profile" 
  options={{
    title: 'Profile',
    headerShown: false, // Update this to false
    tabBarIcon: ({ color }) => <FontAwesome name="user-o" size={24} color={color} />
  }} 
/>

npx expo start

