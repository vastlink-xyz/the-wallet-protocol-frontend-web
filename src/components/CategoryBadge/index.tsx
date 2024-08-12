'use client'

enum CategoryColors {
  'Earning' = '#4CAF50',  
  'Skin' = '#2196F3',    
  'AI' = '#9C27B0',       
  'Team' = '#FF9800',     
  'Security' = '#F44336', 
}

interface CategoryBadgeProps {
  categoryType: keyof typeof CategoryColors;
}

export function CategoryBadge({ categoryType }: CategoryBadgeProps) {
  return (
    <div 
      className="text-white rounded-full px-4 py-1 text-sm"
      style={{ backgroundColor: CategoryColors[categoryType] }}
    >
      {categoryType}
    </div>
  )
}
