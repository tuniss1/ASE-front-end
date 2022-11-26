import { useState, useReducer } from 'react'
import styles from './styles'
import { Autocomplete, Button, Chip, Slider, TextField } from '@mui/material'

const FilterInput = ({
  filter,
  handleCancelSize,
  handleCancelPrice,
  handleCancelCapacity,
  handleChangeDistrict,
  handleChangeWard,
  handleChangeType,
  filtering,
}) => {
  const typeOp = [
    { label: 'Hotel', value: 'hotel' },
    { label: 'Resort', value: 'resort' },
    { label: 'Penthouse', value: 'penthouse' },
  ]

  const districtOp = [
    { label: 'District 1', value: '1' },
    { label: 'District 2', value: '2' },
    { label: 'District 3', value: '3' },
    { label: 'District 4', value: '4' },
  ]

  const wardOp = [
    { label: 'Ward 1', value: '1' },
    { label: 'Ward 2', value: '2' },
    { label: 'Ward 3', value: '3' },
    { label: 'Ward 4', value: '4' },
  ]

  return (
    <div className="row-wrap">
      <div className="col-lg">
        <div className="row">
          <div className="filter-input">
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={typeOp}
              autoComplete={false}
              onChange={handleChangeType}
              renderInput={(params) => (
                <TextField {...params} label="Type" onChange={(e, value) => console.log(value)} />
              )}
            />
          </div>
          <div className="filter-input">
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={wardOp}
              autoComplete={false}
              onChange={handleChangeWard}
              renderInput={(params) => <TextField {...params} label="Ward" />}
            />
          </div>
        </div>
        <div className="chip-container">
          <p className="title">Applied filters:</p>
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {filter.district && (
              <div className="chip">
                <Chip
                  label={`District ${filter.district}`}
                  variant="outlined"
                  onDelete={() => handleChangeDistrict(null, '')}
                  sx={{
                    background: 'white',
                    fontSize: 16,
                    marginRight: '20px',
                  }}
                />
              </div>
            )}
            {filter.ward && (
              <div className="chip">
                <Chip
                  label={`Ward ${filter.ward}`}
                  variant="outlined"
                  onDelete={() => handleChangeWard(null, '')}
                  sx={{
                    background: 'white',
                    fontSize: 16,
                    marginRight: '20px',
                  }}
                />
              </div>
            )}
            {filter.type && (
              <div className="chip">
                <Chip
                  label={`Type ${filter.type}`}
                  variant="outlined"
                  onDelete={() => handleChangeType(null, '')}
                  sx={{
                    background: 'white',
                    fontSize: 16,
                    marginRight: '20px',
                  }}
                />
              </div>
            )}

            {filter.price.isShow && (
              <div className="chip">
                <Chip
                  label={`Price $${filter.price.value[0]} - $${filter.price.value[1]}`}
                  variant="outlined"
                  onDelete={() => handleCancelPrice()}
                  sx={{
                    background: 'white',
                    fontSize: 16,
                    marginRight: '20px',
                  }}
                />
              </div>
            )}

            {filter.capacity.isShow && (
              <div className="chip">
                <Chip
                  label={`Capacity ${filter.capacity.value[0]} - ${filter.capacity.value[1]}`}
                  variant="outlined"
                  onDelete={() => handleCancelCapacity()}
                  sx={{
                    background: 'white',
                    fontSize: 16,
                    marginRight: '20px',
                  }}
                />
              </div>
            )}
            {filter.size.isShow && (
              <div className="chip">
                <Chip
                  label={`Size ${filter.size.value[0]} - ${filter.size.value[1]}`}
                  variant="outlined"
                  onDelete={() => handleCancelSize()}
                  sx={{
                    background: 'white',
                    fontSize: 16,
                    marginRight: '20px',
                  }}
                />
              </div>
            )}
          </div>
          <Button
            sx={{
              background: '#061341',
              padding: '8px 15px',
              position: 'absolute',
              bottom: 0,
              left: '50%',
              transform: 'translateX(-50%) translateY(50%)',
              fontSize: 20,
              '&:hover': {
                background: '#061341',
              },
            }}
            variant="contained"
            onClick={() => filtering()}
          >
            Filter
          </Button>
        </div>
      </div>
      <div className="col-sm">
        <div className="filter-input">
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={districtOp}
            sx={{ borderRadius: 100 }}
            onChange={handleChangeDistrict}
            autoComplete={false}
            renderInput={(params) => <TextField {...params} label="District" />}
          />
        </div>
      </div>
      <style jsx>{styles}</style>
    </div>
  )
}

export default FilterInput
