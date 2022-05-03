class PostSerializer < ActiveModel::Serializer
  include Rails.ap
  attributes :id, :featured_image

  def featured_image
    if object.featured_image.attached?
      { 
        url: rails_blob_url(object.featured_image)
       }
    end
  end
end
