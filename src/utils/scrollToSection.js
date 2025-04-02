
export const scrollToSection = (sectionId) => {
    console.log(`Trying to scroll to section with ID: ${sectionId}`);
    const section = document.getElementById(sectionId);
    if (section) {
      console.log('Found section. Now scrolling...');
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    } else {
      console.log('Section not found.');
    }
  };
  