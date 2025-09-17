import React, { useState } from 'react';
import { 
  TreePine, Calendar, Camera, MapPin, User, Mail, Ruler, Droplets, FileText, Upload, X 
} from 'lucide-react';

const TreeRegister = () => {
  const [formData, setFormData] = useState({
    plantName: '',
    treeType: '',
    datePlanted: '',
    planterName: '',
    planterEmail: '',
    latitude: '',
    longitude: '',
    height: '',
    diameter: '',
    soilType: '',
    wateringFrequency: '',
    notes: '',
    image: null
  });

  const [imagePreview, setImagePreview] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  const treeTypes = [
    'Oak', 'Maple', 'Pine', 'Birch', 'Cedar', 'Willow', 'Cherry', 
    'Apple', 'Magnolia', 'Dogwood', 'Redwood', 'Spruce', 'Fir', 
    'Elm', 'Ash', 'Poplar', 'Sycamore', 'Hickory'
  ];

  const soilTypes = [
    'Clay', 'Sandy', 'Loamy', 'Silty', 'Peaty', 'Chalky', 'Mixed'
  ];

  const wateringOptions = [
    'Daily', 'Every 2-3 days', 'Weekly', 'Bi-weekly', 'Monthly', 'Seasonal'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData(prev => ({ ...prev, image: file }));
      const reader = new FileReader();
      reader.onloadend = () => setImagePreview(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const removeImage = () => {
    setFormData(prev => ({ ...prev, image: null }));
    setImagePreview(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const data = new FormData();
      data.append('name', formData.plantName);
      data.append('treeType', formData.treeType);
      data.append('datePlanted', formData.datePlanted);
      data.append('planterName', formData.planterName);
      data.append('planterEmail', formData.planterEmail);
      data.append('latitude', parseFloat(formData.latitude));
      data.append('longitude', parseFloat(formData.longitude));
      data.append('height', formData.height);
      data.append('diameter', formData.diameter);
      data.append('soilType', formData.soilType);
      data.append('wateringFrequency', formData.wateringFrequency);
      data.append('notes', formData.notes);
      if (formData.image) data.append('image', formData.image);

      const response = await fetch('http://localhost:5000/api/plants', {
        method: 'POST',
        body: data
      });

      const result = await response.json();
      console.log('Tree registered successfully:', result);

      alert('Tree registered successfully!');

      // Reset form
      setFormData({
        plantName: '',
        treeType: '',
        datePlanted: '',
        planterName: '',
        planterEmail: '',
        latitude: '',
        longitude: '',
        height: '',
        diameter: '',
        soilType: '',
        wateringFrequency: '',
        notes: '',
        image: null
      });
      setImagePreview(null);

    } catch (err) {
      console.error('Error registering tree:', err);
      alert('Failed to register tree. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-3 rounded-full">
              <TreePine className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-gray-800">Tree Registration</h1>
          </div>
          <p className="text-green-700 max-w-2xl mx-auto">
            Join our reforestation mission by registering your newly planted tree. 
            Help us track our environmental impact and build a greener future together.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl p-8 border border-green-100">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Plant Name */}
            <div className="space-y-2">
              <label className="flex items-center space-x-2 text-sm font-semibold text-gray-700">
                <TreePine className="w-4 h-4 text-green-600" />
                <span>Plant Name</span>
              </label>
              <input
                type="text"
                name="plantName"
                value={formData.plantName}
                onChange={handleInputChange}
                placeholder="Give your tree a name"
                className="w-full px-4 py-3 border border-green-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                required
              />
            </div>

            {/* Tree Type */}
            <div className="space-y-2">
              <label className="flex items-center space-x-2 text-sm font-semibold text-gray-700">
                <TreePine className="w-4 h-4 text-green-600" />
                <span>Tree Type</span>
              </label>
              <select
                name="treeType"
                value={formData.treeType}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-green-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                required
              >
                <option value="">Select tree type</option>
                {treeTypes.map((type, index) => (
                  <option key={index} value={type}>{type}</option>
                ))}
              </select>
            </div>

            {/* Date Planted */}
            <div className="space-y-2">
              <label className="flex items-center space-x-2 text-sm font-semibold text-gray-700">
                <Calendar className="w-4 h-4 text-green-600" />
                <span>Date Planted</span>
              </label>
              <input
                type="date"
                name="datePlanted"
                value={formData.datePlanted}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-green-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                required
              />
            </div>

            {/* Latitude & Longitude */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="flex items-center space-x-2 text-sm font-semibold text-gray-700">
                  <MapPin className="w-4 h-4 text-green-600" />
                  <span>Latitude</span>
                </label>
                <input
                  type="number"
                  step="any"
                  name="latitude"
                  value={formData.latitude}
                  onChange={handleInputChange}
                  placeholder="e.g., 6.9271"
                  className="w-full px-4 py-3 border border-green-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="flex items-center space-x-2 text-sm font-semibold text-gray-700">
                  <MapPin className="w-4 h-4 text-green-600" />
                  <span>Longitude</span>
                </label>
                <input
                  type="number"
                  step="any"
                  name="longitude"
                  value={formData.longitude}
                  onChange={handleInputChange}
                  placeholder="e.g., 79.8612"
                  className="w-full px-4 py-3 border border-green-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                  required
                />
              </div>
            </div>

            {/* Planter Name */}
            <div className="space-y-2">
              <label className="flex items-center space-x-2 text-sm font-semibold text-gray-700">
                <User className="w-4 h-4 text-green-600" />
                <span>Planter Name</span>
              </label>
              <input
                type="text"
                name="planterName"
                value={formData.planterName}
                onChange={handleInputChange}
                placeholder="Your full name"
                className="w-full px-4 py-3 border border-green-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                required
              />
            </div>

            {/* Planter Email */}
            <div className="space-y-2">
              <label className="flex items-center space-x-2 text-sm font-semibold text-gray-700">
                <Mail className="w-4 h-4 text-green-600" />
                <span>Email Address</span>
              </label>
              <input
                type="email"
                name="planterEmail"
                value={formData.planterEmail}
                onChange={handleInputChange}
                placeholder="your@email.com"
                className="w-full px-4 py-3 border border-green-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                required
              />
            </div>

            {/* Height */}
            <div className="space-y-2">
              <label className="flex items-center space-x-2 text-sm font-semibold text-gray-700">
                <Ruler className="w-4 h-4 text-green-600" />
                <span>Height (cm)</span>
              </label>
              <input
                type="number"
                name="height"
                value={formData.height}
                onChange={handleInputChange}
                placeholder="Tree height in centimeters"
                className="w-full px-4 py-3 border border-green-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
              />
            </div>

            {/* Diameter */}
            <div className="space-y-2">
              <label className="flex items-center space-x-2 text-sm font-semibold text-gray-700">
                <Ruler className="w-4 h-4 text-green-600" />
                <span>Trunk Diameter (cm)</span>
              </label>
              <input
                type="number"
                name="diameter"
                value={formData.diameter}
                onChange={handleInputChange}
                placeholder="Trunk diameter in centimeters"
                className="w-full px-4 py-3 border border-green-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
              />
            </div>

            {/* Soil Type */}
            <div className="space-y-2">
              <label className="flex items-center space-x-2 text-sm font-semibold text-gray-700">
                <TreePine className="w-4 h-4 text-green-600" />
                <span>Soil Type</span>
              </label>
              <select
                name="soilType"
                value={formData.soilType}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-green-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
              >
                <option value="">Select soil type</option>
                {soilTypes.map((type, index) => (
                  <option key={index} value={type}>{type}</option>
                ))}
              </select>
            </div>

            {/* Watering Frequency */}
            <div className="space-y-2">
              <label className="flex items-center space-x-2 text-sm font-semibold text-gray-700">
                <Droplets className="w-4 h-4 text-green-600" />
                <span>Watering Frequency</span>
              </label>
              <select
                name="wateringFrequency"
                value={formData.wateringFrequency}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-green-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
              >
                <option value="">Select watering frequency</option>
                {wateringOptions.map((option, index) => (
                  <option key={index} value={option}>{option}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Image Upload */}
          <div className="mt-6 space-y-2">
            <label className="flex items-center space-x-2 text-sm font-semibold text-gray-700">
              <Camera className="w-4 h-4 text-green-600" />
              <span>Tree Photo</span>
            </label>
            
            {!imagePreview ? (
              <div className="border-2 border-dashed border-green-300 rounded-lg p-8 text-center hover:border-green-400 transition-colors duration-300">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden"
                  id="image-upload"
                />
                <label htmlFor="image-upload" className="cursor-pointer">
                  <Upload className="w-12 h-12 text-green-400 mx-auto mb-4" />
                  <p className="text-green-600 font-medium">Click to upload tree photo</p>
                  <p className="text-green-500 text-sm mt-1">PNG, JPG up to 10MB</p>
                </label>
              </div>
            ) : (
              <div className="relative">
                <img
                  src={imagePreview}
                  alt="Tree preview"
                  className="w-full h-64 object-cover rounded-lg border border-green-200"
                />
                <button
                  type="button"
                  onClick={removeImage}
                  className="absolute top-2 right-2 bg-red-500 hover:bg-red-600 text-white p-1 rounded-full transition-colors duration-300"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>

          {/* Notes */}
          <div className="mt-6 space-y-2">
            <label className="flex items-center space-x-2 text-sm font-semibold text-gray-700">
              <FileText className="w-4 h-4 text-green-600" />
              <span>Additional Notes</span>
            </label>
            <textarea
              name="notes"
              value={formData.notes}
              onChange={handleInputChange}
              placeholder="Any additional information about your tree..."
              rows="4"
              className="w-full px-4 py-3 border border-green-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 resize-none"
            />
          </div>

          {/* Submit Button */}
          <div className="mt-8 text-center">
            <button
              type="submit"
              disabled={submitting}
              className={`bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl ${
                submitting ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              {submitting ? 'Registering...' : 'Register My Tree'}
            </button>
          </div>
        </form>

        {/* Impact Message */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-100 to-emerald-100 rounded-full px-6 py-3 border border-green-200">
            <TreePine className="w-5 h-5 text-green-600" />
            <span className="text-green-700 text-sm font-medium">
              Every tree registered helps us track our collective environmental impact
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TreeRegister;
