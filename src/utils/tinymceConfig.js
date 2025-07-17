// // src/utils/tinymceConfig.js

// export const getTinyMCEConfig = (theme) => ({
//   height: 200,
//   menubar: false,
//   plugins: ['link', 'lists'],
//   toolbar: 'undo redo | bold italic underline | bullist numlist | link',
//   skin: theme === 'dark' ? 'oxide-dark' : 'oxide',
//   content_css: theme === 'dark' ? 'dark' : 'default',
//   content_style: `
//     @import url('https://fonts.googleapis.com/css2?family=Urbanist:wght@400;500;700&display=swap');
//     body {
//       background-color: ${theme === 'dark' ? '#1f2a45' : '#ffffff'};
//       color: ${theme === 'dark' ? '#e0e0e0' : '#222222'};
//       font-family: 'Urbanist', sans-serif;
//       font-size: 14px;
//       padding-left: 10px;
//       padding-right: 10px;
//       margin-bottom:20px;
//     }
    
//   `,
// });

// src/utils/tinymceConfig.js

export const getTinyMCEConfig = (theme) => ({
  height: 200,
  menubar: false,
  plugins: ['link', 'lists'],
  toolbar: 'undo redo | bold italic underline | bullist numlist | link',
  skin: theme === 'dark' ? 'oxide-dark' : 'oxide',
  content_css: theme === 'dark' ? 'dark' : 'default',

  // ✅ Required for self-hosted TinyMCE
  base_url: '/tinymce', // this points to public/tinymce directory

  content_style: `
    @import url('https://fonts.googleapis.com/css2?family=Urbanist:wght@400;500;700&display=swap');
    body {
      background-color: ${theme === 'dark' ? '#1f2a45' : '#ffffff'};
      color: ${theme === 'dark' ? '#e0e0e0' : '#222222'};
      font-family: 'Urbanist', sans-serif;
      font-size: 14px;
      padding-left: 10px;
      padding-right: 10px;
      margin-bottom: 20px;
    }
  `,
});
